import Audi from './Audi';
import Bmw from './Bmw';
import Teslr from './Teslr';
import Mercides from './Mercides';
import Honda from './Honda';

let AllCarData = (obj11) => {

  if (obj11.bying == "bying") {
    console.log("not bying");
  }
  else {
    console.log("it is bying");
  }

  let good = (current) => {
    function notBying() {
      return <><div className='pic_card_text pic_card_text1' ><span>ENGINE :</span>       {current.Engine}</div>
        <div className='pic_card_text pic_card_text2' ><span>TOP SPEDD :</span>    {current.TopSpeed}</div>
        <div className='pic_card_text pic_card_text3' ><span>ACCELERATION :</span> {current.Acceleration}</div>
        <div className='pic_card_text pic_card_text4' ><span>OUTPUT :</span>       {current.MaximumOutput}</div>
        <div className='pic_card_text pic_card_text5' ><span>Prise :</span>         {current.price}</div>
        <img className='pic_card_text6' src={current.logo} />

      </>
    }
    function Bying() {
      return <>
        <div className='pic_card_text pic_card_text1' ><span>ENGINE :</span>       {current.Engine}</div>
        <div className='pic_card_text pic_card_text2' ><span>TOP SPEDD :</span>    {current.TopSpeed}</div>
        <div className='pic_card_text pic_card_text3' ><span>OUTPUT :</span>       {current.MaximumOutput}</div>
        <div className='pic_card_text pic_card_text4' ><span>Prise :</span>         {current.price}</div>
        <button> <a target="#" href='https://www.carfirst.com/?utm_source=google&utm_medium=cpc&utm_campaign_id=10097813460&utm_adgroup_id=103848724720&utm_campaign=PK|KHI|GS|Pros|Web|ROAS|Leads-Conversions|ALL|Sell&utm_term=%2Bonline%20%2Bcar%20%2Bselling&utm_content=436069776451&gclid=EAIaIQobChMIrLXWt_6t9QIVlPhRCh3fRQMQEAAYASAAEgKRmfD_BwE'>BYING</a></button>
      </>
    }


    return (

      <div className="image_style">
        <img src={current.car_name} />
        <h1>{current.name} car</h1>
        <div className="text_details">
          {(obj11.bying == "bying") ? notBying() : Bying()}
        </div>
      </div>
    )
  }
  return (
    <>
      <div className='Audi_car_container'>
        {(obj11.showdata == "audi") ? Audi.map(good) : ""}
        {(obj11.showdata == "teslr") ? Teslr.map(good) : ""}
        {(obj11.showdata == "bmw") ? Bmw.map(good) : ""}
        {(obj11.showdata == "mercides") ? Mercides.map(good) : ""}
        {(obj11.showdata == "honda") ? Honda.map(good) : ""}
      </div>
    </>
  )
}
export default AllCarData;