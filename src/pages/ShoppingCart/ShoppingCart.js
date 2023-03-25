// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Contact from '~/components/Contact/Contact';
import Footer from '~/components/Footer';

import classNames from 'classnames/bind';
import styles from './shoppingCart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NumericFormat } from 'react-number-format';
import Button from '~/components/Button';

// Danh sách sản phẩm
import dataItems from '~/Data/database';

const cx = classNames.bind(styles);

// Danh sách promotion code (Mã giảm giá)
// const promotionCode = {
//   A: 10,
//   B: 20,
//   C: 30,
//   D: 40,
// };

// Có mã giảm giá hay không?
// Mã giảm giá có hợp lệ hay không?
// const data = checkPromotion() = () => {
//   if (data) {
//     discountMoney = (totalMoney * data) / 100;
//     discount.classList.remove('hide');
//   } else {
//     discount.classList.add('hide');
//   }

// };

//   // Cập nhật tiền lên trên giao diện
//   subTotalEl.innerText = convertMoney(totalMoney);
//   vatEl.innerText = convertMoney(totalMoney * 0.05);
//   discountEle.innerText = convertMoney(discountMoney);
//   totalEle.innerText = convertMoney(totalMoney * 1.05 - discountMoney);
// }

// // Kiểm tra mã giảm giá
// function checkPromotion() {
//   let value = inputPromotion.value;
//   if (promotionCode[value]) {
//     return promotionCode[value];
//   }
//   return 0;
// }

// // btnPromotion.addEventListener('click', () => {
// //   updateTotalMoney(products);
// // });

function ShoppingCart() {
  const [productsList, setProductList] = useState(dataItems);

  const totalMoney = dataItems.reduce((a, cur) => a + cur.priceCurrent, 0);
  console.log(totalMoney);

  const removeProductItem = (id) => {
    setProductList((current) => current.filter((items) => items.id !== id));
  };
  const listItems = productsList.map((items) => {
    return (
      <section className={cx('container')} key={items.id}>
        <ul className={cx('products')}>
          <li className={cx('row')}>
            <div className={cx('col left')}>
              <div className={cx('thumbnail')}>
                <a href="/product">
                  <img src={items.image} alt={items.name} />
                </a>
              </div>
              <div className={cx('detail')}>
                <div className={cx('name')}>
                  <a href="/product">{items.name}</a>
                </div>
                <div className={cx('description')}>Mô tả: {items.description}</div>
                <NumericFormat
                  className={cx('price')}
                  value={items.priceCurrent}
                  displayType={'text'}
                  thousandSeparator={true}
                  suffix={'đ'}
                />
              </div>
            </div>
            <div className={cx('col right')}>
              <div className={cx('quantity')}>
                <input className={cx('quantity')} type="number" step="1" value={items.count} />
              </div>
              <div className={cx('remove')}>
                <span
                  className={cx('close')}
                  onClick={() => {
                    removeProductItem(items.id);
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  });

  return (
    <>
      <div className={cx('shoppingCart')}>
        <header className={cx('container')}>
          <h1>Shopping Cart</h1>
          <ul className={cx('breadcrumb')}>
            <li>Trang chủ</li>
            <li>Giỏ Hàng</li>
          </ul>
          {/* <!-- Tổng sản phẩm --> */}
          <span className={cx('count')}>1 sản phẩm trong giỏ hàng</span>
        </header>
        {listItems}
        <section className={cx('option-container container')}>
          {/* <!-- Mã giảm giá --> */}
          <div className={cx('promotion')}>
            <label htmlFor="promo-code">Ghi mã giảm giá vào ô bên dưới ( nếu có) !</label>
            <input type="text" id="promo-code" autoComplete="off" />
            <button type="button"></button>
          </div>
          {/* <!-- Tổng tiền --> */}
          <div className={cx('summary')}>
            <ul>
              <li className={cx('subtotal')}>
                Tổng Cộng:
                <NumericFormat value={totalMoney} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
              </li>
              <li className={cx('vat')}>
                {/* <NumericFormat value={vatPrice} displayType={'text'} thousandSeparator={true} suffix={' đ'} /> */}
                VAT:<span>10,000 đ</span>
              </li>
              <li className={cx('discount hide')}>
                {/* <NumericFormat value={discountPrice} displayType={'text'} thousandSeparator={true} suffix={' đ'} /> */}
                Discount<span>5,000 đ</span>
              </li>
              <li className={cx('total')}>
                {/* Tổng tiền phải trả:<span>{totalMoney - (vatPrice + discountPrice)} đ</span> */}
              </li>
              <Button className="pay">Thanh toán</Button>
            </ul>
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default ShoppingCart;
