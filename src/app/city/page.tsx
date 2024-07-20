"use client";
import { ArrowLeft2, SearchNormal } from "iconsax-react";
import styles from "./city.module.css";
import MainLayout from "../../view/layout/MainLayout";

function mainPage() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <div className={styles.leftBox}>
            <div className={styles.card}>
              <ArrowLeft2></ArrowLeft2>
              تهران
            </div>
            <div className={styles.card}>
              <ArrowLeft2></ArrowLeft2>
              تهران
            </div>
            <div className={styles.card}>
              <ArrowLeft2></ArrowLeft2>
              تهران
            </div>
            <div className={styles.card}>
              <ArrowLeft2></ArrowLeft2>
              تهران
            </div>
            <div className={styles.card}>
              <ArrowLeft2></ArrowLeft2>
              تهران
            </div>
            <div className={styles.card}>
              <ArrowLeft2></ArrowLeft2>
              تهران
            </div>
          </div>

          <div className={styles.boxMain}>
            <div className={styles.topMain}>
              <div className={styles.btnText}>انتخاب شهر</div>
              <div className={styles.btnPrimaryText}>
                شهر خود را در کادر زیر وارد کنید
              </div>

              <div className={styles.inputFieldsContainer}>
                <div className={styles.inputFieldWrapper}>
                  <SearchNormal></SearchNormal>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="مثال:تهران"
                  />
                </div>
              </div>

              <div className={styles.btnPrimaryText}>شهر های پر بازدید</div>

              <div>
                <div className={styles.txtBox}>
                  <div className={styles.txtCard}>تبریز</div>
                  <div className={styles.txtCard}>تهران</div>
                  <div className={styles.txtCard}>هرمزگان</div>
                </div>

                <div className={styles.txtBox}>
                  <div className={styles.txtCard}>کرمان</div>
                  <div className={styles.txtCard}>شیراز</div>
                  <div className={styles.txtCard}>رشت</div>
                </div>

                <div className={styles.txtBox}>
                  <div className={styles.txtCard}>گیلان</div>
                  <div className={styles.txtCard}>بیرجند</div>
                  <div className={styles.txtCard}>قشم</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default mainPage;
