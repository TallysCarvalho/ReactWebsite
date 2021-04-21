import styled from 'styled-components'
import BgImg from '../../assets/bg-image.png'

export const Section = styled.section`
background-image:url(${BgImg});
height:785px;
display:block;
background-repeat:no-repeat;
background-size:contain;



`
export const Content = styled.div`
width:100%;
height:100px;




`

export const Left = styled.div`
padding-left:160px;
padding-top:143px;

@media(max-width: 800px) {
    padding-left:0;
  }
`

export const Title = styled.p`
font-size:55px;
color:#04050a;
font-weight:400;
`

export const Desc = styled.p`
width:472px;
font-size:20px;
color: #9ea0ac;
line-height:30px;
margin-top:58px;

`

export const Button = styled.a`
display:flex;
justify-content: center;
align-items: center;
border-radius: 18px;
margin-top:58px;
width:371px;
height:71px;
line-height:71px;
font-size:22px;
text-align:center;
color:#fff;
cursor: pointer;
background: linear-gradient(90deg,#0546d6,#3f89fc);
text-decoration:none;
box-shadow:0 15px 14px rgb(0 42 177 / 12%);
`