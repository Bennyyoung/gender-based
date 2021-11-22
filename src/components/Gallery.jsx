import { Row, Col, Image } from 'antd'

export const Gallery = () => {

 return (

  <Row>
   <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image
     width={249}
     src="https://www.coe.int/documents/61989255/67584870/Physical_790887175.jpg/9d511894-eaf6-688e-9eab-51b43dffb554?t=1591372186000"
    />
   </Col>
   <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image
     width={249}
     src="https://www.coe.int/documents/61989255/67584870/VErbal_227996869.jpg/e8ad734e-c868-51e9-c4ac-7bb718ccbb13?t=1591372239000"
    />
   </Col>
   <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image
     width={249}
     src="https://www.coe.int/documents/61989255/67584870/Psychological_311200130.jpg/66b7637e-6c87-2b3e-9dbc-4d240c0e9bb1?t=1591372194000"
    />
   </Col>
   <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image
     width={249}
     src="https://www.coe.int/documents/61989255/67584870/Sexual_548314474.jpg/9d10a037-1617-939d-36cb-3c32f737b27b?t=1591372200000"
    />
   </Col>

   <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image
     width={249}
     src="https://www.coe.int/documents/61989255/67584870/Socio-economic_1341073271.jpg/623d04ea-4c8a-d924-e005-2be3049402c8?t=1591372208000"
    />
   </Col>
   <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image
     width={249}
     src="https://www.coe.int/documents/61989255/67584870/Domestic_675117121.jpg/09bdae2c-9833-d313-8c23-09ffe135ce80?t=1591372181000"
    />
   </Col>
   <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image
     width={249}
     src="https://www.coe.int/documents/61989255/67584870/Harassement.jpg/bb2a30ba-7892-2975-2f45-abac7e5e5d25?t=1591602458000"
    />
   </Col>
  </Row>
 )
}
