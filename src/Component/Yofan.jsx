import React from 'react'

export default function Yofan() {
    let list ;
    const numbers = Array.from({length: 20}, (_, i) => "https://yo.fan/p/zeDpyqed2HX");
     list = numbers.length >0 && numbers.map(items=><iframe id="my-iframe" src={items}></iframe>)
     
  return (
    <div>z
        {
          list
        }
    </div>
  )
}
