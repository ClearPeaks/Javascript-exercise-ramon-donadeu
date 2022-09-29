const { fireEvent, getByText } = require('@testing-library/dom')
require( '@testing-library/jest-dom/extend-expect')
const { JSDOM } = require( 'jsdom')
const fs = require( 'fs')
const path = require( 'path')
const { randomInt } = require('crypto')

const html = fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })
/*
  it('Acordion opens', () => {
    const acordionElements = container.getElementsByClassName("acordion__title")
    const elementToClick = randomInt((acordionElements.length)-1)

    //Doesn't Work
    acordionElements[elementToClick].click()
    console.log(acordionElements[elementToClick].getAttribute('active'))

  })

  it('Acordion opened closes onClick', () => {   

  })

  it('Acordion opened closes when clicking another acordion')*/
})