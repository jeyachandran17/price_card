import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export default function App(){
  return(
    <div className='App'>
      <Price_cart price_method="FREE" price_value="0" user="Single User" storage="5" opa="font_opa" opa1="font_opa" check="✔" uncheck="✖"/>
      <Price_cart price_method="PLUS" price_value="9" user="5 Users" storage="50" classname="font_style" opa1="font_opa" check="✔" check1="✔" uncheck1="✖" />
      <Price_cart price_method="PRO" price_value="49" user="Unlimited Users" storage="150" sub="Unlimited" classname="font_style" check="✔" check1="✔" check2="✔"/>
    </div>
  );
}

function Price_cart({price_method,price_value,user,storage,sub,classname,opa,opa1,check,uncheck,uncheck1,check1,check2}){
  return(
    <div className='card'>
      <div className="card_title">
        <h4 className='price_method'>{price_method}</h4>
        <h1 className='price'>${price_value}<span className='font'>/month</span></h1>
      </div>
      <hr/>
      <ul className={classname}><span className="check">{check} </span>{user}</ul>
      <ul><span id='check'>{check} </span>{storage}GB Storager</ul>
      <ul><span id='check'>{check} </span>Unlimited Public Projects</ul>
      <ul><span id='check'>{check} </span>Community Access</ul>
      <ul className={opa}><span id="check">{uncheck}{check1} </span>Unlimited Private Projects</ul>
      <ul className={opa}><span id="check">{uncheck}{check1} </span>Dedicated Phone Support</ul>
      <ul className={opa}><span id="check" className={classname}>{uncheck}{check1} {sub} </span>Free Subdomain</ul>
      <ul className={opa1}><span id="check">{uncheck}{uncheck1}{check2} </span>Monthly Status Reports</ul>
      <button className='button_type'>Button</button>
    </div>
    );
}