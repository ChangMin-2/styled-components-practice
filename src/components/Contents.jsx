import React from "react";
import styled from "styled-components";
import './Contents.css'
export default function Contents(){
  
  const contents = [
    {
      id: 'content-01',
      image: '/images/img_01.jpg',
      title: '대세는 ',
      strongTitle: '선인장',
      desc: '요즘 가장 핫 한 인테리어 소품으로 사랑을 받고 있는 선인장! 이런 선인장에도 정말 다양한 종류가 있답니다. 선인장으로 홈스타일링을 할 땐 하나의 선인장 보단 두 세 개의 선인장을 함께 두는 것이 인테리어 효과에 더 좋습니다.',
      button: 'MORE ITEM'
    },
    {
      id: 'content-02',
      image: '/images/img_02.jpg',
      title: '시들지 않는 매력의 ',
      strongTitle: '드라이플라워',
      desc: '꽃을 좋아하지만 금방 시들어버리기에 선뜻 구매를 하지 못하신다면 드라이플라워나 프리치브드 플라워를 추천 드려요. 꽃의 아름다움과 오랫동안 함께 하실 수 있을 거에요.',
      button: 'MORE ITEM',
      right: true
    },
    {
      id: 'content-03',
      image: '/images/img_03.jpg',
      title: '또 하나의 작은 세상 ',
      strongTitle: '테라리움',
      desc: '재미있는 식물 기르기를 원하신다면 테라리움을 꾸며보세요. 다양한 식물과 다양한 스타일링 하에 세상에 단 하나뿐인 나만의 정원을 가꿀 수 있어요.',
      button: 'MORE ITEM'
    },
    {
      id: 'content-04',
      image: '/images/img_04.jpg',
      title: '진짜 나무 같은 ',
      strongTitle: '조화나무',
      desc: '식물 관리가 어려우시다면 조화 나무를 입양하세요. 요즘은 정말 높은 퀄리티로 제작 되어 가까이서 보지 않으면 진짜 나무와 구분하기 힘들어요.',
      button: 'MORE ITEM',
      right: true
    },
    {
      id: 'content-05',
      image: '/images/img_05.jpg',
      title: '화분 ',
      strongTitle: '스탠드',
      strongTitle2: '테이블',
      desc: '조금 더 색다른 연출을 원하신다면 화분 스탠드와 화분 테이블을 사용해보세요. 화분 스탠드는 낮은 높이의 화분에 화분 테이블은 식물과 함께 할 수 있는 휴식 공간을 만들어 드릴거에요.',
      button: 'MORE ITEM',
    }
  ]
  const Button = styled.button`
    display: inline-block;
    border: 1px solid #eee;
    padding: 8px 20px;
    background-color: #fff;
    font-size: 12px;
    margin-top:10px;
  `

  return (
    <section className="contents-container">
      <div className="inner">
        {
          contents.map((content) => {
            return (
              <div className={content.right? 'content right': 'content left'} key={content.id}>
                <div className="img-area">
                  <img src={content.image} alt="img"/>
                </div>
                <div className="text-area">
                  <div className="title">
                    <span>{content.title}</span><span className="strong-text">{content.strongTitle}</span>
                  </div>
                  <div className="desc">{content.desc}</div>
                  <Button>{content.button}</Button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}