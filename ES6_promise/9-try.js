export default function guardrail(mathFunction) {
  let queue = new Array;
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.toString())
  } finally {
    queue.push('Guardrail was processed')
  }
  return queue;
}
