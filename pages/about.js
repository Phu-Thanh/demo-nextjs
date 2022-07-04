import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import slide9 from "../public/IMG_9456-533x800.jpg"

export default function Home() {
    return (
<html lang="en">
<Head>
  <title>Về chúng tôi - công ty phần mềm Nhật Bản cung ứng dịch vụ CNTT</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</Head>
<body>
<div class="container-fluid">
  <div class="row content">
    <div class="col-sm-3 sidenav">
      <h1>VỀ CHÚNG TÔI</h1>
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#section1">
        Công ty TNHH SYSTEMEXE Việt Nam</a></li>
        <li><a href="#section2">Thành lập: 10/2010</a></li>
        <li><a href="#section3">Vốn điều lệ: 300.000 USD</a></li>
        <li><a href="#section3">Trụ sở chính: Lầu 2, Tòa nhà Etown 1, 364 Cộng Hòa, P.13, Q.Tân Bình</a></li>
        <li><a href="#section4">Nhân viên: 100 người (3/2021)</a></li>
      </ul><br />
    </div>

    <div class="col-sm-5">
      <h1>LỜI CHÀO TỪ LÃNH ĐẠO</h1>
      <hr />
      <h2>Con người – Giá trị cốt lõi của mọi giá trị</h2>
      <p>Đầu tiên, xin được kính gửi lời chào trân trọng đến quý khách hàng, quý đối tác, cũng như tất cả quý anh chị, các bạn đã đến với website của công ty SystemEXE Việt Nam.</p>
      <p>Đất nước Việt Nam đang đón nhận sự phát triển vũ bão của nền công nghệ thông tin, với sự trỗi dậy của kỷ nguyên cách mạng công nghiệp 4.0 – IoT, AI, Blockchain, BigData, v.v… , cũng như sự tăng cường, mở rộng của lĩnh vực xuất khẩu – gia công phần mềm, đặc biệt là với thị trường Nhật Bản.</p>
      <p>Đây thực sự là một cơ hội, nhưng cũng đồng thời là một thách thức lớn cho các doanh nghiệp CNTT ở Việt Nam. Leo lên con sóng để cùng vươn tới, hay bị con sóng đánh quật, 2 kết quả ở 2 thái cực, chỉ cách nhau bởi một ranh giới rất mong manh, đòi hỏi chúng ta phải luôn không ngừng đổi mới,  cải tiến quy trình chất lượng để đi tới.</p>
      <p>Và trên hết, chúng tôi – SystemEXE Việt Nam hiểu rõ rằng, sự thay đổi – cải tiến hay các quy trình cũng đều bắt đầu từ con người, niềm tin – uy tín với khách hàng cũng được tạo dựng từ con người v.v… Con người chính là giá trị cốt lõi nhất của mọi giá trị. Do đó, SystemEXE Việt Nam luôn luôn chú trọng xây dựng, nâng cao năng lực giá trị của từng thành viên trong tổ chức, qua đó tạo dựng niềm tin – uy tín với khách hàng, cũng như luôn ứng biến – đón đầu được với sự thay đổi của công nghệ – kỹ thuật.</p>
      <p>Là một người Việt Nam có kinh nghiệm trên 15 năm sinh sống và làm việc tại Nhật, tôi tự tin hiểu rõ những đặc trưng, điểm mạnh, yếu của nền CNTT ở cả Nhật Bản lẫn Việt Nam. Từ đó SystemEXE Việt Nam chúng tôi ghi nhận, học hỏi cũng như kết hợp những đặc trưng, điểm mạnh của cả 2 bên, để mang lại những giá trị tối ưu nhất đến với quý khách.</p>
      <p>Hy vọng quý khách hàng, quý đối tác, cũng như toàn thể nhân viên sẽ luôn hài lòng với SystemEXE Việt Nam.</p>
      <br /><br />
    </div>

    <div class="col-sm-4">
    <Image src={slide9} />
    </div>
  </div>
</div>

<footer className="container-fluid text-center">
  <p>Copyright 2022 © SystemEXE Viet Nam</p>
</footer>

</body>
</html>
    )
}