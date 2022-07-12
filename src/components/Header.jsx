import React from "react";
import './Header.css'
export default function Header(){
  return (
    <header className="header">
      <div className="inner">
        <p>식물의 모든것</p>
        <h1 className="title">All about Plants</h1>
        <div className="desc"><span>반려식물 입양 계획 하시나요?</span> <span className="strong">25%~</span></div>
      </div>
    </header>   
  )
}