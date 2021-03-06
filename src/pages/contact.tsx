import Title from '../components/primary/title'
import style from '../styles/page.module.scss'

import DefaultHead from '../components/heads/default'

export default () => (
  <>
    <DefaultHead
      titlePre="お問い合わせ"
      description="お問い合わせ"
    ></DefaultHead>
    <Title
      title="お問い合わせ"
      description
      imgSrc="/assets/ikasa_background.png"
      category
      grey={false}
    />
    <div className={style.page}>
      <h3>ユーザー様お問い合わせ</h3>
      <p>
        アイカサをご利用のユーザー様は、お問い合わせLINE窓口からご連絡ください。
      </p>
      <div
        style={{
          width: '100%',
          padding: '10px',
          border: '2px solid whitesmoke',
          textAlign: 'center',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      >
        <a href="https://lin.ee/ekNY9Zk">お問い合わせLINEアカウント</a>
      </div>

      <hr />

      <h3>法人のお客様お問い合わせ</h3>
      <p>
        アイカサに関するお問い合わせは下記のメールアドレスよりお願いいたします。<br />
        ・取材希望<br />
        ・傘の外面を使ったコラボレーション<br />
        ・アイカサ設置希望(有料)<br />
        ＊現在多くのお問い合わせを頂いており、返信にお時間がかかる場合がございます。
      </p>
      <div
        style={{
          width: '100%',
          padding: '10px',
          border: '2px solid whitesmoke',
          textAlign: 'center',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      >
        info@i-kasa.com
      </div>

      {/* <form>
        <div className="field">
          <label className="label">お問い合わせ種別</label>
          <div className="control">
            <div className="select">
              <select style={{ width: '100%' }}>
                <option>未選択</option>
                <option>取材</option>
                <option>提携</option>
                <option>その他</option>
              </select>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
          }}
        >
          <div className="field">
            <label className="label">お名前 (性)</label>
            <div className="control">
              <input className="input" type="text" placeholder="" />
            </div>
          </div>
          <div className="field">
            <label className="label">お名前 (名)</label>
            <div className="control">
              <input className="input" type="text" placeholder="" />
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">会社名</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="株式会社Narture Innovation Group"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">メールアドレス</label>
          <div className="control">
            <input className="input" type="text" placeholder="" />
          </div>
        </div>
        <div className="field">
          <label className="label">電話番号</label>
          <div className="control">
            <input className="input" type="text" placeholder="" />
          </div>
        </div>
        <div className="field">
          <label className="label">住所(都道府県)</label>
          <div className="control">
            <input className="input" type="text" placeholder="東京都" />
          </div>
        </div>
        <div className="field">
          <label className="label">住所(都道府県以降)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="渋谷区●-●-● ●●ビル2階"
            />
          </div>
        </div>
        <hr />
        <div className="field">
          <label className="label">お問い合わせ内容</label>
          <div className="control">
            <textarea className="textarea" placeholder=""></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="button is-primary is-fullwidth"
          style={{ fontWeight: 'bold', marginTop: '50px' }}
        >
          送信
        </button>
      </form> */}
    </div>
  </>
)
