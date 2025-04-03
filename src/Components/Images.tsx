import photo from '../assets/486046572_18377360056136150_2998048290928242167_n.jpg'
import photo2 from '../assets/482687704_1309013557106797_103597591710832643_n.jpg'
import photo3 from '../assets/483959461_18376511503136150_5689947815298767211_n.jpg'
import photo4 from '../assets/484790397_18376845628136150_3087811840569437007_n.jpg'
import photo5 from '../assets/484832297_18376906498136150_4092655052854497383_n.jpg'
import photo6 from '../assets/484874351_18376883488136150_2508399096813661284_n.jpg'

function Images() {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-8'>
            <img className='h-96 w-96' src={photo} alt="Gordon Great Room View" />
            <img className='w-96 h-96' src={photo2} alt="Gordon Great Room View" />
            <img className='w-96 h-96' src={photo3} alt="Gordon Great Room View" />
            <img className='w-96 h-96' src={photo4} alt="Gordon Great Room View" />
            <img className='w-96 h-96' src={photo5} alt="Gordon Great Room View" />
            <img className='w-96 h-96' src={photo6} alt="Gordon Great Room View" />
        </div>

    </div>
  )
}

export default Images


