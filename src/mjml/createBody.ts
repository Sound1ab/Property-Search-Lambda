export function createBody(children: string[]) {
  return `<mjml>
  <mj-body background-color="#F2F2F2">
    ${children.join('')}
  </mj-body>
</mjml>`
}
