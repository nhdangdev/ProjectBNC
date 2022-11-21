// <!-- Favicons -->
// <link href="assets/img/favicon.png" rel="icon">
// <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

// <!-- Google Fonts -->
// <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

// <!-- Lib CSS Files -->
{
  /* <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"> */
}
import React from 'react';
import Header from '~/components/Header';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';
import './style.scss';
function Product() {
  return (
    <div>
      <Header />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Product</li>
            </ol>
            <h2>Product</h2>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Blog Section ======= --> */}
        <section id="product" className="product">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 entries">
                <article className="entry">
                  <div className="entry-img">
                    {/* <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid"> */}
                  </div>

                  <h2 className="entry-title">
                    <a href="/product-details">products 1</a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        z<i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{' '}
                        <a href="blog-single.html">
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam
                      et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem
                      doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro
                      consequatur assumenda perferendis dolore.
                    </p>
                    <div className="read-more">
                      <a href="blog-single.html">Read More</a>
                    </div>
                  </div>
                </article>
                {/* <!-- End blog entry --> */}

                <article className="entry">
                  <div className="entry-img">
                    {/* <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid"> */}
                  </div>

                  <h2 className="entry-title">
                    <a href="blog-single.html">Nisi magni odit consequatur autem nulla dolorem</a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{' '}
                        <a href="blog-single.html">
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo
                      libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum.
                      Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti
                      qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis
                      non alias odio quos distinctio.
                    </p>
                    <div className="read-more">
                      <a href="blog-single.html">Read More</a>
                    </div>
                  </div>
                </article>
                {/* <!-- End blog entry --> */}

                <article className="entry">
                  <div className="entry-img">
                    {/* <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid"> */}
                  </div>

                  <h2 className="entry-title">
                    <a href="blog-single.html">
                      Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.
                    </a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{' '}
                        <a href="blog-single.html">
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore
                      omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum
                      aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
                    </p>
                    <div className="read-more">
                      <a href="blog-single.html">Read More</a>
                    </div>
                  </div>
                </article>
                {/* <!-- End blog entry --> */}

                <article className="entry">
                  <div className="entry-img">
                    {/* <img src="assets/img/blog/blog-4.jpg" alt="" className="img-fluid"> */}
                  </div>

                  <h2 className="entry-title">
                    <a href="blog-single.html">
                      Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.
                    </a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{' '}
                        <a href="blog-single.html">
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis
                      rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores
                      expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum.
                      Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam
                      voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                    </p>
                    <div className="read-more">
                      <a href="blog-single.html">Read More</a>
                    </div>
                  </div>
                </article>
                {/* <!-- End blog entry --> */}

                <div className="blog-pagination">
                  <ul className="justify-content-center">
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End blog entries list --> */}

              <div className="col-lg-4">
                <div className="sidebar">
                  <h3 className="sidebar-title">Search</h3>
                  <div className="sidebar-item search-form">
                    <form action="">
                      <input type="text" />
                      <button type="submit">
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>
                  {/* <!-- End sidebar search formn--> */}

                  <h3 className="sidebar-title">Categories</h3>
                  <div className="sidebar-item categories">
                    <ul>
                      <li>
                        <a href="#">
                          General <span>(25)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Lifestyle <span>(12)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Travel <span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Design <span>(22)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Creative <span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Educaion <span>(14)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar categories--> */}

                  <h3 className="sidebar-title">Recent Posts</h3>
                  <div className="sidebar-item recent-posts">
                    <div className="post-item clearfix">
                      {/* <img src="assets/img/blog/blog-recent-1.jpg" alt=""> */}
                      <h4>
                        <a href="blog-single.html">Nihil blanditiis at in nihil autem</a>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>

                    <div className="post-item clearfix">
                      {/* <img src="assets/img/blog/blog-recent-2.jpg" alt=""> */}
                      <h4>
                        <a href="blog-single.html">Quidem autem et impedit</a>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>

                    <div className="post-item clearfix">
                      {/* <img src="assets/img/blog/blog-recent-3.jpg" alt=""> */}
                      <h4>
                        <a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>

                    <div className="post-item clearfix">
                      {/* <img src="assets/img/blog/blog-recent-4.jpg" alt=""> */}
                      <h4>
                        <a href="blog-single.html">Laborum corporis quo dara net para</a>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>

                    <div className="post-item clearfix">
                      {/* <img src="assets/img/blog/blog-recent-5.jpg" alt=""> */}
                      <h4>
                        <a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div>
                  {/* <!-- End sidebar recent posts--> */}

                  <h3 className="sidebar-title">Tags</h3>
                  <div className="sidebar-item tags">
                    <ul>
                      <li>
                        <a href="#">App</a>
                      </li>
                      <li>
                        <a href="#">IT</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Mac</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Office</a>
                      </li>
                      <li>
                        <a href="#">Creative</a>
                      </li>
                      <li>
                        <a href="#">Studio</a>
                      </li>
                      <li>
                        <a href="#">Smart</a>
                      </li>
                      <li>
                        <a href="#">Tips</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar tags--> */}
                </div>
                {/* <!-- End sidebar --> */}
              </div>
              {/* <!-- End blog sidebar --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Blog Section --> */}
        <Contact />
        <Footer />
      </main>
      {/* <!-- End #main --> */}
    </div>
  );
}

export default Product;

{
  /* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */
}
