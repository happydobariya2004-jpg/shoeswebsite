// import React from 'react'
// import { useLocation } from 'react-router-dom'
// import {TreandingData} from './Treandingdet'

// const Treandingdata = () => {
//    let location=useLocation()
//       let currentID=location.pathname.split('/')[0]
//       // let showData=Shopdata.filter((v)=>v.i==currentID)[0]
//       let showData=TreandingData.split((v)=>v.i==currentID[0])
//     return (
//     <>
//     <div className="container text-center">
//         <img className='w-25' src={showData.image} alt="" />  
//         <h2>{showData.details}</h2>
//         <h2>{showData.price}</h2>

//     </div>
//     </>
//   )
// }

// export default Treandingdata

import React from 'react'
import { useLocation } from 'react-router-dom'
import { TreandingData } from './Treandingdet'

const Treandingdata = () => {
  let location = useLocation()
  let currentID = location.pathname.split('/')[2]
  let showData = TreandingData.find((v) => v.id == currentID)

  return (
    <>
      <div className="container-fluid ">

        <div className="container ">
          <div className="row">
            <div className="col-lg-6 d-flex">
              <img className='w-50 rounded-5 m-5' src={showData?.image} alt="" />
            </div>
            <div className="col-lg-6 mt-5">
              {/* <h2>{showData?.details}</h2> */}
              {/* <h2>{showData?.price}</h2> */}
              <h2 className='fs-6'>{showData?.Brand}</h2>
              <h2>{showData?.details}</h2>

              <h2 className='star fs-5' style={{ color: "#FF6B2B" }}>{showData?.rating}<span className='text-dark fs-6'>  4.3(284 reviews)</span></h2>

              <button className='text mb-1 border rounded-1' style={{ background: "#FF6B2B ", color: "white" }}>Hot Deal</button>
              <h6 className='fs-3'><del className='color text-danger fs-5 '> ₹4000</del> ₹{showData.price}</h6>



              <h6>select size <span className='text' style={{ color: "#FF6B2B" }}>size chat</span></h6>
              <div className=" d-flex mt-3">
                <div className="d-flex gap-2 ">

                  <span className="size1 border border-dark px-2 py-1 rounded-2">7</span>
                  <span className="size1 border border-dark px-2 py-1  rounded-2">8</span>
                  <span className="size1 border border-dark  px-2 py-1  rounded-2">9</span>
                  <span className="size1 border border-dark px-2 py-1  rounded-2">10</span>
                </div>

              </div>


              <div className="col-5 d-flex gap-4 mt-3">

                <div className="d-flex">

                  <button className='border-1 rounded-2 d-flex fw-semibold'>Add Cart</button>

                </div>
                <div className="col-lg-6  col-sm-5 justify-content-start d-flex" >
                  <button className=' border-1 rounded-2 fw-semibold' >Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 text-center ">
            <div className="col-lg-3 col-sm-4">

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGC169Nn0SR1DYyE2A2wWW7mDaIpnyaSD1Nw&s" alt="" />
              <h6>Blue Casual Sneakers</h6>
            </div>

            <div className="col-lg-3 col-sm-4 ">

              <img src="data:image/webp;base64,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" alt="" />
              <h6>Green & Beige Chunky Sneakers
                Color: Green + Cream/Beige</h6>
            </div>

            <div className="col-lg-3 col-sm-4">

              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCSm552VxoXKJszRRKUUCMZipGjsfQyLWE1BJyoQpd0ImXpmKw6XV5xNoluEQueFXEHrsPFltqvhSdqNx8MSPnz_9ug0e0ODgCaqJL3oA4o35N00XdmLg969cRvCZ5xie_j25rQg&usqp=CAc" alt="" />
              <h6>White Minimal Sneakers</h6>
            </div>

            <div className="col-lg-3 col-sm-4">

              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhURExMVFRUVFRUVFhUVFxcXFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0mHSUrLi0tLS0tLS0tLS0tLS0tKy0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tK//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xAA/EAABAwIDBAgDBQcFAAMAAAABAAIRAyEEEjEFQVFhBhMicYGRofCxwdEjMkJS4RQzYnKCovEHU5Ky0hUWQ//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQACAgICAwEBAQAAAAAAAAABAgMREiETMQRBUWEiMv/aAAwDAQACEQMRAD8A83CVIE4LznoAJUBKpMJQiEqDCEqEgRCVEIBEQlhEIBEidCRANhCdCSEwSEBOQgiQlSohBkSpUJkEJYSoBIQlQmEYJyQJwCUgBKhKEjCVASpAIQlQZEJUIARCVIgERCWEIBqEqITIiEsIhACEsIhACVIlCAEqEIASpISpkjBOTQnJAqUJE5BhLCEoSMISoQCBLCEqDIiEqEAiRKhBGohOSIBEJyEwSEJUIIAIhCVACVCCYQJJCE6EI3CPJX9RQnBIE4IWAnBInJGROCEqDIlSoCAIQlQkCISohANQlRCYIiEqEA2EsJUIIiEqEAiEqUBCZtEeyEqHXrgmFIrzHJQcO8Ofm7+4j6q6x9ubLl5Txj07AjiPNKu8M/h9EJ7T4o/YMCcEgTgs3YAnJE4IUAEqEqARLCGGZiLakkADlJIE8tU4hOazHcwUWieokiEqFJkQlhCAahKhAIiEqEwREJYRCCIUJYRCARJmbrIEb9YUfGEEEHwPAqGxkDmVURty5M0etJ7sc2AY/mHDu4qDj64MZBAHheQo9UweRTStK01O3JtMZXbAlpmEKDmQq4Hyj8XITwmpwXO9QoToSBX2wejb8QM7jlp8d54wrpSbzqE3vFI3KjY0uktBIGp3SdAOJ5BWlLYbgC6sIaGueb9oNaJNhYHdv71q9m7PYXZ2tilSJZS/ido+pzO6e/gFXdMa+XC4ioLEvZSbwIY01XR4ghdtMVauK+W1vby/amNL3kNsxpIAGnM+J9IU/ZGOJim493f+vxjmqELtRfBlXasWjUoraazuGuQueFqZmh3n796rqvMtHGdS9Ks7jcEQlQko1CVEIIiEqEwREISOdF0FJYQoz8Rwsoz6h4lVFWFs8R6SHNmQeP8AhRYix1QyuQZnxXF1WZKuIcdp271RMAiZlvjYg+pUSpRy2Vrg3B1AOjtBxE9w/X0ULEtlXWforddIeUIS5DxQtNf1K5CcE0Kz6PYIVsRTpnQmT3NEkei5Ijc6erM6jYOzXBlNzhHW1abGjfDs7j5imR4r0zH0BSosw1K1SoMsgfdbHafHACfIDUhUfS+mGdQ8fdp18M48gXPpk9w61vmrrZNVr2VcdUMB+ZtMk2FFhIbH82Uu5jLwXoUrFY1Dz7Wm07lExTw0Np0xDWAAbzbid5581k+ntSNnU+NSrUf/AHFvwcFoKWJzta/87Wvj+YAgLM/6lNy4TBs/hefGaZ+Z8laXmi6MTITmoC+2JXkFvv3r5K1hZrZlbK8HitNC4/k11MS7PjW60REJVW4nGl0tp6aF3GbQPqsKUm86hte8VjcpGIxYbYCXcOHfz5KANqljrjM46zo3k1p381MOzurYKhucw8N8eiotqsy1qg4PPxXdTFWrivltZoqGLa/Sx4fT6ex1WXwlctIPvvWlo1MwlYZsXHuG+HLy6k9I5s2Kchc7oQn4AbnEJlTD1NwafEyrBIqi0spw0lAbhZEG2+RdMdgSCGki5ADtxmwUypUiydTqWIkRrfd3cEc59sJrj10rHZmS3S9xulK6p2ZAvBHdPsrjXqZnZhM39eKRj4MnxG4raHNb30QEJUxzh+Vvr9UK06XAVx0VrZcVTPElvm0qoC64erkc14/C4O8jK5azqYl6to3Ew9H6S4c1sPUY3VzHNbycRnZ/dTp+a77ErCpsyiGTBpMbAc1toggk2AA17lyGJzU8w0HbHPLDp8wAq7ofWGXEYIkfZVaobIBAp5iWGDYiHNML0nnIvQhxfSp5iZYMh72W+S4/6gbPdVoUCC37GhncHTJBDbNtE9k6xpxgJ/RV2SviaUERXLwDZwFVodcDT73qrHbuMoBnU1nZG18G2m18OOV+bMwnL+EEAm2g5qo9k8YrU4K5hW2I2c+TYdklpIcC0kWOVwMO8J3KHTwD3GBE96chxpGFrMJUzMB5e/SFTHo9ihfqiRxBb9VZ7Pw1anTOelUEH8pI75Ft/osc1OVdQ1w3427Nx7i4ik3V2vdw8VaYbYuR1GmLkg1XjkLN9VTbGqxX7f3s0X3CfopuI6RP6xzmQC7sjkxukd5+CMdOEaTkvzna32/h4o8w5p8NFiekQ+3dzAd/yv8ANaF+0DVpmTuv37ln9tdrI/8Ahyn+mw9AtEK5hVxsjFR2T3fT3zVMF1o1IMomsWjUnE6ncNahR8DWztHJSF5tqzWdS9GtotG4CQpUKTcKjZ8N/wBVDrCPdlZ02X5FcsbgtQJvJA4qo67ebaO9IbK4Fi0OB5CfBcscGEywWIuI0K5Cm6YMhcq1SNJg6eG9axHfRadmZIGmiFwGFJulT/z+tNT+LgJ4QGnggLneg12xNoAYe5+5IcSYs24v3J2xmdVtEkGW1sNSqA7jDSyR39WD4rHYludhplxDSQSBF40mRotfsVo6zZ8GYwtVnhSexonzK7sWSJjX24cuOazv6GzWNG0q4GWC2ieyS4SCWwSdD2TPOVW9ObspPJktAYe7QequMW0s2mwmftKLmgnLHZfNo4ZjAN9TvVN0ubmY8cC8Acw92X4grZioHtkN4Bgge+8nxVfSflf4qwa/ssPFn0VVWdeUB6Jsqpma0guBto53hv8ARaenh+zJcTbeGn1hY3odWz9neBP+F6DWEUnE6AE+iA8P6Ruiu9wtDi0xbuPxUClirQRPPQwZkd11M2o7OXu4ud8VTkwgLXCVYBE8P0KbVbmY5vA5h8D6KJRqenw9/EqVha0PE6O7J8dPWEBWPbCaFaYnBdsNJF40INiJGm+DpqNDdPpUGtFm+JuU5BNjViDEEg2sCdffxV+6m4XLSO8ELj0eqfagcbefJen4fC9j8Okfdb8oWOTFF521x5ZpGnmiRWPSDD9XWIG8TbTmq5cd68Z07KW5Rs5roT61cEQB4riU0qdlOOszuYOxNPOQ4awT39lw8w6PRVlHDZmZDqO0PHX1/wCynVMTlgRJkn5fNQ3VC0uI17IHvxVUiWV4jbnRY4tBjUD4ITHVKk2JHIRCFU0n+IbzHViJho03T6hpiVmto7VqtJgx4QVZbSrayW6bgFlNo1b/AOB8AtaxtpadGu2tW/3HeavuiW3nitS6w5g0VGCdweWOPqFkHFStn1crmngZ+C3rEQ5rWmXpu2qgGNoPsC4vbImTnpjKXSMpPYMbwuO06Y6sdZUBeSey0AN3EEkC5gi6r9rYkuZTfDjGR85wG/ZvuAw6nK9+l4BVbtWs0vJJcJmMrSRHKPFWh1p4Ydqocj203RkIIzkiG3G4EgniBFpWexDmh01MwhxnI1pBAJ/CS3L69wUmlicn53NLry0ggjgTaxgwRfS0yozcRTJGZgcZJdmLo1NmtbHmT4cUcNrs7Zgwz6dTLDKkiKppntgzlGUmW5XMM8Z4St1UrUhSIc1o7JkNMEiODb+C8wpbWOIdSY5tRjGEmGB1SXyftAH53NOXK2AdG75WzfUdTpEsxzxLTDMU2oGm33ctQsF+QQHl+1MK+m1tUgBlR1QNaSDUaGFv7xgMsnNaeB4KqcQVq+km2/2vCMD8rarcRUJpgHstLSZDyTmEviNezvlZBzSDCNiYLSflKkON492/RRSus2afDy09EyTsQMpB00Pv18lLq7++fMJMNTbWZEmW2trG66lYagBUmo2WNPbBJEttN28jKAjYWpleDMQRvXr2wsWKlEEBxtchriO+QIXj9Z7mPc7qqWdpcIaHhsyQQGB0Hu+K9Wwe1aNOlRIqCn1jTmnJTALbDLTLRmFocWmGuBG+wbO9MGjrGka/DvHgqBa3pI6hi8g/aKZ6t2Y5SRUe0CXMbEAAxEzZZ7bWHZTxFWmwgsbUcGkGRlnswZMiIvN1yfIr3ydXx7dcTaWz6roytmRIuJhPdsbEf7Z8x9VfbPbGXuA8grVz7Qud18WBr7HxE/unfh4cb71Cr7Org/u3feJ04CAvRXusqrGGTB98lUW0ztiiWPbg6n5ShXh7kJ8j8cKraVfn6/V6zuIdJ/X9VcY+s/eTHe4/NUlY8z6/VdVXHeXJdKR070z37unN3rSGUtu3ECrh2uIB6s3huY5SMrw1vHKSq6lUI+zd95tjxtofKF36HYhpzU3aEG3gom0KGQ2EBnZtIblu5kud945Q4d7VSQXCHcnA/wDIfVpVbij2iuzasuIH4hA/mF2/MeKh5pPf8kBedFnuFZkcY817HjQDRg8LrynobRHXNJXrOLZ9me5AeFbQwgZVdbf3J7cKxxuOECeP9SmbeZFdw577JtF7eEWixd/7WVt7bU1MIu1cCzqszAAW3tGm/ed1/BUdLe3jp37lucDRa6QS69oG8EXBkrD4qgab3MOrHFvkbHygox230MtddpuzXlrs8W0d9VNxmKcCQC2dI+8YvYx3qDgoc4E6H7wkzPhoFZYiiGEOAhuhjgd/gYWrFFbi3OJlpbmdLnNMPje0OJsDqbXOsr0rorSqx1jadIMdAawOcWsEDQc4kneSSbkk+aOPbhepdC3Hqmtm/wBRIQDeleAe+i4PpMII1Y4giLggFpuDzCxAxbqop5pljGUiTvyS0RygN+GgC9gxtLOwg7wvJq1DJXLIiH281jnj/LfBP+mmwmo7lLa7d7Kg4X5KUH8FwvSJiHxCrK5F1Mqm/FV1bfKZIxelXMv5oVoZbHVBOnoB8lWOKnYs6/VQSF2Veff2VoSgoAQQmnSbsnFdVVa7gfRara1Om9orMcD2YcTNmkg9lo1cDBuNyxPyVrsnHkdkmypCPjGljgb6741EZrDQXtyIT3NGfMNHQ4eOo8CpGKotPZNt4OpygGL95MjhHBNwLbOpuBD6ZLgDrA/eMjjHa/pPFMNn0SwJhrm7nH38V6RVbNPvCyHRKs17GloAAsQPQrYvqdlAeOdLWxiHGLcPZCi4dwtu4wR/7V/00wZL8w7geZBA9YVHga7XMbc7jrof+XyWWT9bYvxY4SL9ocr71lelVKMQT+drXW0/Kf8AqtOz3vn+0qo6W4YllOqBoSw23Ou3cOB81njnVmmSN1Z2hUg8t/ctDRxGdhBjTwIPBZpS8HXj5HXLOp005LpcqU+4kassf5dx+S9Q6F1fsmd1/BeXVHFrg/zHFp48ivQ+g2NZkFOYF3Uyd4/Ew/xN38oKA9AzSF5v0qw+TEh2gJHrb4wt5TqgaR4LJ9OTTqNgkB0FK0bjSq21O0ag/wCildYdyzmxsfmblJ7TdeY0mYjirltYcV51qzWdS9StotXcOlVQcQ6ApFSpaVXYmsUQcopJQmGqUKtJ2z2MpDmonVKyxbSTa/qo4w7juK3rbpy2r2i9WkyclM/Zn/lTv2N/D1H1T5x+p4T+IBbCboZGimPokGCuVajl7j6LStolnakx2nYWt1jcpPaFxxtu7lzr1HNcx4GRwg5ibkzvG+NPJV7HFp5q0pvFVsHVWzbPofjQyoGD7lQZmDgJ7TP6SY7i1ei03SF4nsDFmm/qjq13WU+bhYs/qbLe/Kdy9iwOJD2Ne0yCAQRwIkJkzPSwQNNHNdMcHA/JYfYj4a5hNmuNtdeU8l6T0lwZqMdG8EeYXm9EZa1WwMhr7zbMJIgHcSfJZ5f+WuL/ALWlFs/KR9FYVsCK9J1NwJDmxbcdxBg6GCqfB1n1HQGs5mDu8VMr7RdQflDWOgAyWnfylck2/HbFY+2Cx2DfRqOpPEOYY7xqCORF1ypPgrVdJcUcWGuc1jXsBDXNblJBvlde44cJWWczwI1C68d+UOHJTjP8WdMWkCW7wN2/vI5eSsdh4nqjlJ+zJacwP3Hmcr2mfXfoVRYTElpVnTyuuDeZixAPEA2jiFozeiYfGucIJGcAGRMPbue3kd43G3Amm2+xzhJHkqfZG0ntc2lVeW37FWJyng4b2nQq+xRLpDgQ4agGe4jiDuKAx5qFjg8bjfu36g+5WioYoOHv0VRj6FzHkVDw2KLOz4id40+SxzU3G3R8fJxnX60pxCh4iqq120pXGpjZXNFXXN0k4hCrv2hC04s+ULDrG7mlNNUflKmtw09y7NwYXPtrxlWB7uBSh7uCsjh+5M6o8B37kcv4OH9U2Ka5zgYFgnU2ONiBEQrGrTAmY+aY0AmxELTl0z4dqbE4XLY6HQ8DzUZjyw8/itPUY0iDB+aqsbgso/M3+5vvitseWJ6n2wy4Zr3HpEr1phwMOBBBGoXqP+n/AEhpVWNwz3BtQSWzYEHtQO6YjkvJniNDIS0qpaQ4SCN+mi6NufT6Qq7OJC8o6TYMUcaWtIP2bp/h7U38XnyVfhunuKY0NFSdwm6i0MYS59SrmL3meFjc/LyWeWf8y1xR/uFpsGmXVbi3DmCue2mzXqRpIFuQATNjYprXWLgZmbfROrYhuY668lxTuJd8amEHIomMwGe4MOG/5FW4qM3ylmnx8063mO0WpWemTdhzMHsu56HxSU3uYYMgjcVp8RhabxBjkRqOYVbtDZlRguOsZ+FwuW8jFx8F1UzRbqfbkvhmvcdwa3FhzYcFcdGduNa4UKvaGlJ28E//AJE72O05GDuWX6rgfA/VMa7tA3BBB8Vttjp7Vi+h9OqA9jgWuALTxBEgrJ9JOg9SjSdWBBawg21gmD4XnwULY3TatRbkkOaAAAfwxuCtR0vqYprqGUAPEHU21KVpjSqVmZhhzgymPwp5rYP2UeHouT9kFcXld84WP/ZzzQtR/wDE80KvNCfBKxfs57RNh5Lidm1XaH38VevoNaQXEudu/wAblz67/AufNcfN2eOFK7YlXUuPvko79kVPzH1WmaAfqZQ8DiU4ySU44ZE7GqOtm8z5J1Po3V4jzWk6oTPw+S7U44q/JZHjqzQ6N1Tvb5px6O4jcW/8lqWR+b0/RK+m4/dM+EeqfOxeOrC4roviDfIBzDm38Fzw/RrGNMtaLcHt+Erfta3RwMxqpmCwrDMeRV1z3hFvj0n9YalsbHflDbfe7Mx3gSu7OjjtDLjvPE71tMZgy1oLdFDoMcSbmP01RfNafZ0+PSPTPYTo1B3+a6u6KEycy1lClG9FepBiO4akrHnaWvjqxdfovUGjp4cym/8A1SvxHqtmKTpkj9E8YiDl/VPySXiqwdToziB+XzTG7Hxbfuj1C9CFLNcX7kDBu1JPd/hVzsnx1eZ4no7iXnN1JneW5b8ze6hno3igf3Rkc2j5r1bqsuk+ZRSwYL5NpHnHerjPeEW+PSZYDZlDFtOQ4dziB+Zmh4SVpsBgaxE1KeWLgSHX8LLU/sbRG62o1UurRBF9PfBFs95jQp8elZ2zNKk51iQPBd6eHjUyPP5K3fQpi3yK5inTFy7TgCsHVKvGEZwHohWPWM9hKntOmPeydbDgPmutOkBYBdWUfFSWYc77clnpe3OjQHCSo9atJiLDQbu+FKxz8jQJu7/r7+arM3NXWrO1kqlW4gLv1o3NUek7l9V1LiP8K9I27MqnkPfFdaVR86COd1GibAwpNAc9E9FtLaAYlo52n4qYxtP8rfJRKR3qSHgeSIEuwFPQgeSKVOhplHgSFydWbwXelUbvHoiTiEkMpiwAHvmuDw0OLg6ABEQCPLVFR7QO9RatQD7oPmlsacdoYtpEDXiBChMEWLg3NvIK6OcSZIIXIVWnUOnmlEfapn6WOFNNgsQdON/BSWYphtHvyVUcQ3cFNw0awfJVtOkokboPiJXZsG8X7pUefcLvTPckC+FkOnc0pwn3vS9rkpmF1lCqh35SBwAUZ7mjWx7rqzObl5rk9x3tmeCXFXJX+P8AaEinZG8PUIT4lzVFCmOCc9gQhSFJtX967kYHcLBc2NQhbudKpJ4N0iEHIaIkrtRcboQlJwn0zYKQHFCEjNUlrrBCFMqg06lR6qEIg5RMS4zC46EJEJyIdaIv4K0oN0CEIS6vEGy6sKEJH9AOIKf1h470IUyuCZzZPa43QhVBSQtHAeSEIWzF/9k=" alt="" />
              <h6>Black Formal Shoes</h6>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default Treandingdata