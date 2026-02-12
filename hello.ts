import { Agent } from '@mastra/core/agent';
import 'dotenv/config';

async function main() {
  const agent = new Agent({
    id: 'hello-agent',
    name: 'HelloAgent',
    instructions: 'You are a helpful assistant.',
    model: 'google/gemini-2.0-flash',
  });

  const response = await agent.generate('Say "WSL is ready!"');
  console.log(response.text);
}

main();