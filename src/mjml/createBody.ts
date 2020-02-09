export function createBody(children: string[]) {
  return `<mjml>
  <mj-body>
    ${children.join('')}
  </mj-body>
</mjml>`
}
