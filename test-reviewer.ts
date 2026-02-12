import 'dotenv/config';
import { z } from 'zod';
import { reviewerAgent } from './reviewer.js';

const reviewSchema = z.object({
  review: z.string().describe('The code review text: concise, prioritized feedback with suggested fixes'),
});

async function testAgent() {
  const messyCode = `
    function process(items) {
      let result = [];
      for(let i=0; i<items.length; i++) {
        // Hardcoded secret!
        const apiKey = "12345-ABCDE"; 
        result.push(items[i]);
      }
      return result;
    }
  `;

  console.log('Reviewing code...\n');

  const result = await reviewerAgent.generate(messyCode, {
    structuredOutput: { schema: reviewSchema },
  });

  const { review } = result.object;
  console.log('─'.repeat(60));
  console.log('CODE REVIEW');
  console.log('─'.repeat(60));
  console.log(review);
  console.log('─'.repeat(60));
}

testAgent();
