describe("index.js", () => {
  it("has a functional expression called divide", () => {
    expect(divide).to.exist
  })

  it("divide divides x by y", () => {
    let x = 2000
    let y = 100
    expect(divide(x, y)).to.equal(20)
  })

  it("has an arrow function called square", () => {
    expect(square).to.exist
  })

  it("square arrow function multiplies a number times itself", () => {
    let x = 2
    expect(square(x)).to.equal(4)
  })

  it("has an arrow function called add", () => {
    expect(add).to.exist
  })

  it("add arrow function takes two parameters and adds them together", () => {
    let a = 3
    let b = 4
    expect(add(a,b)).to.equal(a+b)
  })
})
