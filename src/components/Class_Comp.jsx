import React, { Component } from 'react'

export default class Class_Comp extends Component {
  render() {
    const a =3;
    const b =4;
    return (
      <>
      <h1> Danh sách phần mềm</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>

        <h1>Tong cua 2 so 3 + 4 la : {a+b}</h1>

      </>
    )
  }
}
