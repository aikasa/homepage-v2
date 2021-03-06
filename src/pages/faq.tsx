import Title from '../components/primary/title'
import style from '../styles/page.module.scss'
import FaqContent from '../components/cards/faq_content'
import FaqNavigation from '../components/cards/faq_navigation'

import DefaultHead from '../components/heads/default'

export default () => (
  <>
    <DefaultHead
      titlePre="よくある質問"
      description="よくある質問"
    ></DefaultHead>
    <Title
      title="よくある質問"
      description=""
      imgSrc="/assets/ikasa_background.png"
      category
      grey={false}
    />
    <div className={style.page}>
      <FaqNavigation />

      <div id="start" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>はじめに</h2>

        <FaqContent title="アイカサってどんなサービス？">
          アイカサは、日本一の傘シェアリングサービスです。
          <br />
          駅や店頭にアイカサスポット（傘立て）があるので、そこから傘をレンタルして、使わなくなったら返却することができます。
        </FaqContent>

        <FaqContent title="どこに設置してありますか？">
          駅、商業施設、コンビニ、飲食店などに設置されています。
          <br />
          詳しい設置場所は<a href="/#map">こちら</a>
          から確認できます。（アプリでも確認できます）
        </FaqContent>

        <FaqContent title="利用料金は？">
          基本プランは、24時間で70円です。24時間を超えた場合は、24時間ごとに70円がかかります。ずっと借りっぱなしになっても420円
          <br />
          使い放題プランは、1ヶ月つかっても使わなくても280円かかるプランです。
          <br />
          <span style={{ fontSize: '13px' }}>
            ※傘を紛失してしまった場合は、合計864円の支払い義務が発生します。
          </span>
        </FaqContent>
      </div>

      <div id="howtouse" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>使い方</h2>

        <FaqContent title="どうやって借りますか？">
          ご利用エリアによってレンタル方法が異なります。
          <br />
          <br />
          【東京・横浜・大宮・名古屋・大阪・神戸エリアをご利用の方】
          <br />
          ①アプリをダウンロードする（アプリストアで「アイカサ」を検索）
          <br />
          ②アプリにログイン
          <br />
          ③『アイカサを借りる』を選択
          <br />
          ④アイカサスポットに表示されているQRをスキャン
          <br />
          ⑤傘をロックの手前まで持ってくる
          <br />
          ⑥鍵が開くので、傘を受け取ってご利用ください
          <br />
          アプリ版レンタル方法は<a href="/#howtouse">こちら</a>
          から詳しく確認できます。
          <br />
          <br />
          【岡山・水戸・福岡エリアをご利用の方】
          <br />
          ①アプリをダウンロードする（アプリストアで「アイカサ」を検索）
          <br />
          ②アプリにログイン
          <br />
          ③『アイカサを借りる』を選択
          <br />
          ④借りたい傘の持ち手部分に表示されているQRをスキャン
          <br />
          ⑤傘の暗証番号3桁が届くので、そちらを合わせていただくと鍵が開くので、
          <br />
          そのままご利用ください
          <br />
          <br />
          ※もし暗証番号に合わせても開かない傘の場合、一旦その傘を返却いただき、スポットにある別の傘をご利用いただき、アイカサお問い合わせ窓口まで開かなかった傘のQRコード部分の写真と共にご連絡いただけますと幸いです。
        </FaqContent>

        <FaqContent title="どうやって返却しますか？">
          ご利用エリアによって返却方法が異なります。
          <br />
          <br />
          【東京・横浜・大宮・名古屋・大阪・神戸エリアをご利用の方】
          <br />
          ①アプリにログイン
          <br />
          ②『アイカサを返す』を選択
          <br />
          ③アイカサスポットに表示されているQRをスキャン
          <br />
          ④傘をロックの手前まで持ってくる
          <br />
          ⑤鍵が開くので、傘を奥まで戻してください
          <br />
          アプリ版返却方法は<a href="/#howtouse">こちら</a>
          から詳しく確認できます。
          <br />
          <br />
          【岡山・水戸・福岡エリアをご利用の方】
          <br />
          ①アプリにログイン
          <br />
          ②『アイカサを返す』を選択
          <br />
          ③アイカサスポットに表示されているQRをスキャン
          <br />
          ④傘を傘立てにかけて返却
          <br />
          <br />
          ※もし返却できているか不安な場合、アイカサユーザーIDと共にアイカサお問い合わせ窓口までご連絡いただけますと幸いです。
        </FaqContent>

        <FaqContent title="どこで返却できますか？">
          借りた場所と別の場所でも返却が可能です。返却可能な場所はアプリからご確認いただけます。
        </FaqContent>
      </div>

      <div id="place" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>設置場所について</h2>

        <FaqContent title="現在の設置エリアを教えて欲しい">
          現在アイカサのサービスは東京・横浜・大宮・名古屋・大阪・神戸・岡山・水戸・福岡にてサービスを導入しております。
        </FaqContent>

        <FaqContent title="アイカサスポットがない場合">
          スポット拡大に尽力致しておりますので、そちらのスポットにも導入できるよう頑張ります！お客様の方でもアイカサをオススメして頂けると導入がスムーズになりやすいので、よろしければぜひオススメして頂けると嬉しいです。
        </FaqContent>

        <FaqContent title="近くのスポットはどこにありますか？">
          アイカサ公式アプリのマップからお近くのスポットが検索できますのでそちらをご覧ください。
        </FaqContent>
      </div>

      <div id="payment" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>支払い方法について</h2>

        <FaqContent title="支払い方法は？">
          現在、クレジットカード（Visa / MasterCard / JCB / Diners Club Card /
          American Express）、 LINE Pay、d払い、auかんたん決済
          に対応しています。
          <br />
          その他の決済方法については、順次対応中です。
        </FaqContent>

        <FaqContent title="支払いに問題が発生したらどうすればいい？">
          アプリより、アイカサお問い合わせ窓口にご連絡ください。
        </FaqContent>

        <FaqContent title="支払いをLINE Payからクレカに変更したい。">
          アイカサ公式アプリのマイページより決済情報の登録の変更をお願いいたします。今月末までにクレジットカードの登録をお済ませいただけましたら、今月のご請求を来月のクレジットカードにご請求させていただきます。
        </FaqContent>
      </div>

      <div id="others" style={{ marginBottom: '' }}>
        <h2 style={{ marginBottom: '20px' }}>その他</h2>

        <FaqContent title="傘が壊れていました。">
          別の傘をレンタルしていただき、レンタル後にアイカサお問い合わせ窓口までご連絡ください。ご利用の傘のレンタル履歴を修正させていただきます。
          <br />
          <br />
          新たに傘のレンタルが難しい場合、傘の根元にあるID番号と、ご利用いただいたスポットの名前をお問い合わせ窓口へご連絡ください。
        </FaqContent>

        <FaqContent title="傘を（エリア外に）持って帰ってしまったため、しばらく返却できません。">
          返却できるタイミングで返却スポットにご返却をお願いいたします。
          <br />
          また、ご料金は返却いただいた際にご連絡いただきました本日付けで処理させていただきますので、返却いたしましたらご一報ください。
        </FaqContent>

        <FaqContent title="正常に返却できているかわかりません。">
          アイカサ公式アプリのマイページを確認ください。
          <br />
          そちらにレンタル中の傘が表示されていなければ、正常に返却できております。
        </FaqContent>

        <FaqContent title="返却の際に傘がスロットを通りませんでした。">
          傘はそのまま傘立てにかけていただき、傘の番号と傘立ての場所をアイカサお問い合わせ窓口にご連絡ください。
        </FaqContent>

        <FaqContent title="退会したい、利用停止したい。">
          退会につきまして、お問い合わせ窓口に『退会したい』とご連絡ください。
        </FaqContent>

        <FaqContent title="公式アプリが開けません。マップが正常に表示されません等">
          一度アプリを落としていただき、再度お試しください。
        </FaqContent>

        <FaqContent title="使い放題プランと420円プランはどう違いますか？">
          使い放題プランは利用するしないに関わらず毎月280円(税込)がかかりますが、返却を気にせず使い放題ができる格安プランになります。
          <br />
          420円は、同月内の課金上限になりまして、翌月まで傘を借りっぱなしですとまた翌月1日から日額70円のご料金が加算されますが、返却されましたら課金はストップいたします。ご利用スタイルに合わせてお選びください。
        </FaqContent>

        <FaqContent title="紛失してしましました。">
          お手数ですが、紛失した際は紛失手数料として864円（税込）をいただいております。なお、864円は紛失手数料のためカサを買取する料金ではございません。
          <br />
          カサを個人が所有や転売をすることはできませんのでお気をつけください。
          <br />
          アイカサ公式アプリのマイページより紛失申請のお手続きをお願いいたします。
        </FaqContent>

        <FaqContent title="領収書作成できますか？">
          可能です。月末に作成いたしますので、お問い合わせ窓口まで、領収証作成希望とメッセージの上、宛名をご連絡ください。
        </FaqContent>

        <FaqContent title="傘が盗まれた・盗難された">
          こちらの方で警察と連携をとらせていただきますので、
          <br />
          ・場所（例：ローソン池袋一丁目店）
          <br />
          ・日時（例：1/17,17:00頃）
          <br />
          ・状況（例：傘立てに入れてたら無くなっていた）
          <br />
          などの状況をアイカサお問い合わせ窓口までご連絡ください。
        </FaqContent>
      </div>
    </div>
  </>
)
