import React from 'react';
import '../style/home.css';

{/* home page fom the home-text.html*/}

const Home = () => {
    return (
        <>
            {/* Nav */}
            <nav className="navbar navbar-expand-lg" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/img/nav-logo.png" alt="logo" width="130" height="70" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item"><a className="nav-link" href="#">Sơn Nội Thất</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Sơn Ngoại Thất</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Sơn Công Nghiệp</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Khác</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Tin Tức</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Liên Hệ</a></li>
                            <li className="nav-item"><button type="button" id="register-button" className="btn btn-dark">Đăng nhập</button></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <header className="hero-header">
                <img className="hero-bg" src="/img/header-home.png" alt="Header image" />
                <div className="hero-content">
                    <h1 className="hero-title">ANSANG PAINT</h1>
                    <p className="hero-sub">Each story represented by their color. Choose your own story.</p>

                    <div className="btn-group">
                        <a className="btn btn-dark" href="#simple-list-item-1" style={{ textDecoration: 'none', color: 'aliceblue' }}>Mua Sắm Ngay</a>
                        <button type="button" className="btn btn-light">Liên Hệ Tư Vấn</button>
                    </div>
                </div>
            </header>

            {/* Why choose us */}
            <section className="why-choose-us py-5">
                <div className="container">
                    <div className="text-center mx-auto trust-head">
                        <h2 className="trust-title mb-3">TẠI SAO KHÁCH HÀNG TIN DÙNG ĐẠI LÍ SƠN ANSANG</h2>
                        <p className="trust-desc mb-0">
                            Chúng tôi là đại lý phân phối sơn chính hãng, cung cấp giải pháp sơn toàn diện cho nhà ở, căn hộ và công trình.
                            Với danh mục sản phẩm đa dạng, bảng màu phong phú và đội ngũ tư vấn giàu kinh nghiệm, chúng tôi cam kết
                            mang đến lựa chọn phù hợp nhất cho từng không gian sống.
                        </p>
                    </div>

                    <div className="row text-center g-4 mt-4">
                        <div className="col-12 col-md-6">
                            <div className="trust-stat">
                                <div className="trust-number"><h3>100+</h3></div>
                                <div className="trust-label">Sản phẩm sơn chính hãng</div>
                                <div className="trust-sub">Từ nội thất, ngoại thất đến chống thấm, chống nóng</div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="trust-stat">
                                <div className="trust-number"><h3>100+</h3></div>
                                <div className="trust-label">Khách hàng & công trình đã phục vụ</div>
                                <div className="trust-sub">Nhà ở, căn hộ, cửa hàng và dự án dân dụng</div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="trust-stat trust-stat--center mt-md-3">
                                <div className="trust-number"><h3>98%</h3></div>
                                <div className="trust-label">Khách hàng hài lòng</div>
                                <div className="trust-sub">Quay lại hoặc giới thiệu cho người quen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goals */}
            <section id="goals" className="goals">
                <div className="goals-wrap">
                    <div className="goals-img-div">
                        <img src="/img/green-exterior.jpg" className="goals-img" alt="Ansang Paint goals" />
                    </div>

                    <div className="goals-content">
                        <h2 className="goals-header">MỤC TIÊU ANSANG PAINT</h2>
                        <div className="goals-list">
                            <div className="goals-item">
                                <div className="goals-icon">
                                    <img src="/img/list-item.png" alt="" />
                                </div>
                                <p className="goals-text">Không ngừng cải tiến công nghệ, nâng cao năng suất và chất lượng sản phẩm ở mức cao nhất, phù hợp với tính nhiệt đới hóa ở Châu Á</p>
                            </div>

                            <div className="goals-item">
                                <div className="goals-icon">
                                    <img src="/img/list-item.png" alt="" />
                                </div>
                                <p className="goals-text">Trở thành một đơn vị hàng đầu về những sản phẩm sơn đa chất thấm thông minh, luôn tìm tòi những giải pháp mới mang tính đột phá để sản xuất ra những sản phẩm đa năng.</p>
                            </div>

                            <div className="goals-item">
                                <div className="goals-icon">
                                    <img src="/img/list-item.png" alt="" />
                                </div>
                                <p className="goals-text">Luôn hướng tới khách hàng: Đặt lợi ích của khách hàng và những đối tác lên hàng đầu thông qua các chính sách mềm dẻo, linh hoạt, hài hòa.</p>
                            </div>

                            <div className="goals-item">
                                <div className="goals-icon">
                                    <img src="/img/list-item.png" alt="" />
                                </div>
                                <p className="goals-text">Hợp tác, chia sẻ, tin cậy: Xây dựng môi trường làm việc chuyên nghiệp biết lắng nghe và thấu hiểu khách hàng.</p>
                            </div>
                        </div>

                        <a className="goals-btn" href="#services">Xem giải pháp và dịch vụ</a>
                    </div>
                </div>
            </section>

            {/* Missions */}
            <section className="jotun-mission-goals py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title mb-2">SỨ MỆNH ANSANG PAINT</h2>
                        <p className="section-sub mb-0">Cam kết bền vững và định hướng phát triển của Jotun.</p>
                    </div>

                    <div className="row row-cols-1 row-cols-lg-3 g-4 g-lg-5 justify-content-center">
                        <div className="col">
                            <div className="mission-card mission-1 h-100">
                                <p className="mb-0">Luôn tìm ra những giải pháp hiệu quả nhất về chất phủ bề mặt cho các công trình dân dụng và công cộng phù hợp với mọi yêu cầu cầu của khách hàng.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="mission-card mission-2 h-100">
                                <p className="mb-0">Gia tăng giá trị bền vững và thẩm mỹ cho các công trình, làm đẹp cho cuộc đời thông qua mỗi cm2 bề mặt công trình hoàn thiện.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="mission-card mission-3 h-100">
                                <p className="mb-0">Nâng cao hiệu quạ sử dụng đồng tiền cho mỗi người dân dùng sản phẩm sơn và chất chống thấm.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products / Go to shop */}
            <section data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                <div id="simple-list-item-1">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="section-title mb-2">KHÁM PHÁ SẢN PHẨM CỦA CHÚNG TÔI</h2>
                            <p className="section-sub mb-0">Chúng tôi có những sản phẩm với đa dạng loại sơn màu sắc nên chọn cmn đi.</p>
                        </div>

                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-lg-6">
                                <div className="product-card h-100">
                                    <img src="/img/interior-home.png" alt="Sơn nội thất" className="product-img" />
                                    <div className="product-body">
                                        <h3 className="product-title">Sơn Nội Thất</h3>
                                        <p className="product-desc mb-3">Sản phẩm sơn chính hãng<br />Từ nội thất, ngoại thất đến chống thấm, chống nóng</p>
                                        <a className="shop-button" href="#services">Xem sản phẩm</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="product-card h-100">
                                    <img src="/img/exterior-home.png" alt="Sơn ngoại thất" className="product-img" />
                                    <div className="product-body">
                                        <h3 className="product-title">Sơn Ngoại Thất</h3>
                                        <p className="product-desc mb-3">Sản phẩm sơn chính hãng<br />Từ nội thất, ngoại thất đến chống thấm, chống nóng</p>
                                        <a className="shop-button" href="#services">Xem sản phẩm</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 g-lg-5 mt-1 mb-5">
                            <div className="col-12 col-lg-6">
                                <div className="product-card h-100">
                                    <img src="/img/industrial-home.png" alt="Sơn công nghiệp" className="product-img-2" />
                                    <div className="product-body">
                                        <h3 className="product-title">Sơn Công Nghiệp</h3>
                                        <p className="product-desc mb-3">Sản phẩm sơn chính hãng<br />Từ nội thất, ngoại thất đến chống thấm, chống nóng</p>
                                        <a className="shop-button" href="#services">Xem sản phẩm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer py-4">
                <div className="container text-center">
                    <p className="mb-0">&copy; 2024 AnSang Paint. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Home;