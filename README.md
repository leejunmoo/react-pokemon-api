# 포켓몬도감

### React 를 바탕으로 포켓몬api 를 이용해 도감 만들기
(by 이준무)

### 서비스주소 : https://web-react-pokemon-api-fyyf25lboho2ya.gksl2.cloudtype.app/

# 제작 목표📋
#### 1. React 활용법 숙달
#### 2. useState, useEffec를 이용한 컴포넌트 배열변경
   
   
##### 📌개발환경 : 운영체제 윈도우10 chrome
##### 📌사용 코드에디터 : vs code
##### 📌개발언어: HTML, CSS, JavaScript
##### 📌사용 모듈: React 활용 
   
# 사이트 메인 페이지🖥

  ![image](https://user-images.githubusercontent.com/113665599/217723554-d1f792ab-d713-4259-b5f1-cbe1e5544b99.png)


# 제작포인트🔎
#### 1. 포켓몬 API 활용    
#### 2. 실제 도감기계를 모티브로 제작한 디자인     
#### 2. 버튼을 누르는 포켓몬에 해당하는 정보 정렬


# 오류해결✅

<details>

### 오류당시 코드    
![image](https://user-images.githubusercontent.com/113665599/218092717-db3c9fb8-4647-4bd5-9840-dce99fad7659.png)

****
   #### 초기목적:     
   포켓몬api (기본주소 기준) 으로 모든 데이터를 불러와   
   원하는 정보였던 사진, 이름, 타입, 능력 을 가져오려고함.    
   #### 이슈:     
   앱을 처음키거나 코드를 수정했을때는 이미지나 정보등이 제대로 불러와졌지만    
   새로고침을 하거나 이미지, 타입 처럼 배열의갯수가 있는 정보등은 불러와지지 않아서 화면로딩이안됨    
   #### 해결:    
   ![image](https://user-images.githubusercontent.com/113665599/218093365-a27567dc-3259-42d5-a440-95c1c30a4f11.png)    
   삼항조건을 이용하여 페이지를 리로딩 할때 정보가 업데이트될경우에만 사진이 나올수 있도록 코드 수정
   
   
</details>

# 수정

<details>

![image](https://user-images.githubusercontent.com/113665599/218093731-75e52ec2-18a2-4c9c-bef0-0c6b212efc75.png)
![image](https://user-images.githubusercontent.com/113665599/218093768-48c84d0b-514e-40fc-a43f-71038e41d658.png)

****    
#### 수정내용:    
button 함수 설정 btn 클릭시 설정되어있는 이름의 포켓몬 정보들을 새롭게 불러들임    
버튼을 누를경우 저장되어있는 주소가 useState에 넘어가며 페이지를 새롭게 갱신함 ( useEffect 조건 설정 )

****    
#### 디자인 수정:    
 (기존):     
 ![image](https://user-images.githubusercontent.com/113665599/217723554-d1f792ab-d713-4259-b5f1-cbe1e5544b99.png)
     
 (수정):     
 ![image](https://user-images.githubusercontent.com/113665599/218092341-65dbd8f1-67ad-4807-81e3-a94d44e97485.png)


</details>
   



