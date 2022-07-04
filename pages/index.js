import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";
import slide1 from "../public/AppREMO-DĂNG-KÝ-DIỆN-TỬ.jpg"
import slide2 from "../public/EXEX-QUẢN-LÝ-BÁN-HÀNG.jpg"
import slide3 from "../public/EXEX-QUẢN-LÝ-SẢN-XUẤT.jpg"
import slide4 from "../public/iReporter-báo-cáo-diện-tử.jpg"
import slide5 from "../public/Asprova-Quản-lý-lịch-sản-xuất.jpg"
import slide6 from "../public/BizMobile-quản-lý-thiết-bị-di-dộng.jpg"
import slide7 from "../public/Logizard-Quản-lý-kho.jpg"
import slide8 from "../public/MC-Web-controller-do-hiệu-suất-máy-sản-xuất.jpg"
import slide9 from "../public/EXEX-QUẢN-LÝ-NHÂN-SỰ-TIỀN-LƯƠNG.jpg"
import Link from 'next/link';
var $ = require("jquery");
if(typeof window !== "undefined"){
    window.$ =window.jQuery = require("jquery");
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(()=> import("react-owl-carousel"),{
    ssr: false,
})

export default function Home() {
  return (
<html lang="en">
<Head>
<title>Trang chủ - SystemEXE Viet Nam | Japanese Quality Software</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/logo.png" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</Head>
<body>
<div>

</div>
<nav className="navbar navbar-inverse" style={{backgroundColor: '#931845'}}>
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <img src="/logo-sticky.svg" style={{width: '100%'}} alt="Image" />
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
      <img src="/vi.png" alt="Image" />
      <br />
      <img src="/ja.png" alt="Image" />
      </li>
        <li><Link href="/about" prefetch={true}>About</Link></li>
      </ul>
    </div>
  </div>
</nav>

<div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src="/dặc-trưng-diểm-mạnh-Cty1.jpg" style={{width: '100%'}} alt="Image" />
        <div className="carousel-caption">
        <h1 style={{backgroundColor: '#931845'}}>KINH NGHIỆM HÀNG ĐẦU</h1>
        <h1 style={{backgroundColor: '#931845'}}>ĐỘI NGŨ CHUYÊN NGHIỆP</h1>
        <h1 style={{backgroundColor: '#931845'}}>CAM KẾT CHẤT LƯỢNG NHẬT</h1>
        </div>      
      </div>

      <div className="item">
        <img src="/Background-online-EXE-1067x800.jpg" style={{width: '100%'}} alt="Image" />
        <div className="carousel-caption">
        <h1 style={{backgroundColor: '#931845'}}>VĂN PHÒNG LÀM VIỆC</h1>
        </div>      
      </div>

      <div className="item">
        <img src="/EXE_slide_1400x788-1400x788.jpg" style={{width: '100%'}} alt="Image" />   
      </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
</div>
  
<div className="container text-center">    
  <h3>SẢN PHẨM</h3><br />
  <div className="row">
  <OwlCarousel className='owl-theme' loop={true}
              items={3}
              margin={10}
              autoplay={true}
              autoplayTimeout={1000}
              autoplayHoverPause={true}
              nav={true}>
            <div className="item">
                <Image src={slide1} />
                <h1>Phần mềm đăng ký điện tử AppRemo</h1>
            </div>
            <div className="item">
                <Image src={slide2} />
                <h1>Phần mềm quản lý bán hàng EXEX</h1>
            </div>
            <div className="item">
                <Image src={slide3} />
                <h1>Phần mềm quản lý sản xuất EXEX</h1>
            </div>
            <div className="item">
                <Image src={slide4} />
                <h1>Phần mềm báo cáo điện tử iReporter</h1>
            </div>
            <div className="item">
                <Image src={slide5} />
                <h1>Phần mềm quản lý lịch sản xuất Asprova</h1>
            </div>
            <div className="item">
                <Image src={slide6} />
                <h1>Phần mềm quản lý thiết bị di động BizMobile</h1>
            </div>
            <div className="item">
                <Image src={slide7} />
                <h1>Phần mềm quản lý kho Logizard</h1>
            </div>
            <div className="item">
                <Image src={slide8} />
                <h1>Phần mềm đo hiệu suất máy sản xuất MC-Web Controller</h1>
            </div>
            <div className="item">
                <Image src={slide9} />
                <h1>Phần mềm quản lý nhân sự tiền lương EXEX</h1>
            </div>
        </OwlCarousel>
  </div>
</div><br />

<footer className="container-fluid text-center">
  <p>Copyright 2022 © SystemEXE Viet Nam</p>
</footer>
</body>
</html>
  )
}
