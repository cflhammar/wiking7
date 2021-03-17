(this.webpackJsonpwiking7=this.webpackJsonpwiking7||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),r=i(9),a=i.n(r),c=(i(14),i(3)),o=i(4),d=i(1),h=i(6),l=i(5),u=(i(15),i(16),i(0)),p=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).classes="card",s.renderCard=s.renderCard.bind(Object(d.a)(s)),s.flipCard=s.flipCard.bind(Object(d.a)(s)),s.handleStyle=s.handleStyle.bind(Object(d.a)(s)),s}return Object(o.a)(i,[{key:"renderCard",value:function(){return this.props.card.isFlipped?this.props.card.value:"?"}},{key:"flipCard",value:function(){this.props.onFlip(this.props.card.id)}},{key:"handleStyle",value:function(){var e={color:"black",height:"100px",fontSize:"50px",backgroundColor:"rgba(200,200,200,0.1)"};return this.props.card.isFlipped&&(e.color="white",e.backgroundColor="rgba(230,230,230,0.3)"),this.props.card.found&&(e.backgroundColor="rgba(40,240,40,0.3)"),e}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"cardContainer",children:Object(u.jsx)("div",{className:"card",style:this.handleStyle(),onClick:this.flipCard,children:this.renderCard()})},this.props.card.id)}}]),i}(n.a.Component),j=(i(18),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={flipCounter:0},s.renderRow=s.renderRow.bind(Object(d.a)(s)),s}return Object(o.a)(i,[{key:"renderRow",value:function(e){return Object(u.jsxs)("div",{className:"rowCardContainer",children:[Object(u.jsx)(p,{onFlip:this.props.onFlip,card:this.props.cards[e]},this.props.cards[e].id),Object(u.jsx)(p,{onFlip:this.props.onFlip,card:this.props.cards[e+1]},this.props.cards[e+1].id),Object(u.jsx)(p,{onFlip:this.props.onFlip,card:this.props.cards[e+2]},this.props.cards[e+2].id),Object(u.jsx)(p,{onFlip:this.props.onFlip,card:this.props.cards[e+3]},this.props.cards[e+3].id)]},e)}},{key:"render",value:function(){var e=this;return this.props.cards.length>5?Object(u.jsx)("div",{className:"RowContainer",children:[0,4,8,12].map((function(t){return e.renderRow(t)}))}):Object(u.jsx)("p",{})}}]),i}(n.a.Component));i(19);i(20).config();var b=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={toplist:{rounds:"",time:""},name:""},s.backendURL="https://wiking7.herokuapp.com/",s.getHighScore=s.getHighScore.bind(Object(d.a)(s)),s.renderToplist=s.renderToplist.bind(Object(d.a)(s)),s.addHighScore=s.addHighScore.bind(Object(d.a)(s)),s.handleNameChange=s.handleNameChange.bind(Object(d.a)(s)),s}return Object(o.a)(i,[{key:"getHighScore",value:function(){var e=this,t=this.backendURL+"api/highScore";fetch(t,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({toplist:t})}))}},{key:"addHighScore",value:function(){this.state.name?(this.props.addHighScore(this.state.name),this.getHighScore()):alert("Enter name before submitting!")}},{key:"renderToplist",value:function(e){var t=this.state.toplist[e];if(t){var i=t.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t+1},t+1),Object(u.jsx)("td",{children:e.name},t+2),Object(u.jsx)("td",{children:e.rounds},t+3),Object(u.jsx)("td",{children:e.time},t+4)]},t)}));return Object(u.jsxs)("table",{className:"toplistTable",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Pos"}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Rounds"}),Object(u.jsx)("th",{children:"Time"})]})}),Object(u.jsx)("tbody",{children:i})]})}return"waiting on server"}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"componentDidMount",value:function(){this.getHighScore()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"toplist",children:[Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("input",{placeholder:"Enter your name",onChange:this.handleNameChange}),Object(u.jsx)("button",{type:"submit",onClick:this.addHighScore,children:"Save Result"})]}),Object(u.jsx)("div",{className:"outerToplistContainer",children:Object(u.jsxs)("div",{className:"toplistContainer",children:[Object(u.jsxs)("div",{className:"toplistRound",children:[Object(u.jsx)("h4",{children:"Fewest Rounds"}),this.renderToplist("rounds")]}),Object(u.jsxs)("div",{className:"toplistTime",children:[Object(u.jsx)("h4",{children:"Fastest Time"}),this.renderToplist("time")]})]})})]})}}]),i}(n.a.Component),f=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={cards:[{value:"",id:"",isFlipped:!1,found:!1}],time:0},s.foundCorrect=0,s.flippedCards=0,s.numRounds=0,s.lowestScore="-",s.posted=!1,s.onFlip=s.onFlip.bind(Object(d.a)(s)),s.setBoard=s.setBoard.bind(Object(d.a)(s)),s.shuffleBoard=s.shuffleBoard.bind(Object(d.a)(s)),s.checkMatch=s.checkMatch.bind(Object(d.a)(s)),s.resetFlipped=s.resetFlipped.bind(Object(d.a)(s)),s.addRound=s.addRound.bind(Object(d.a)(s)),s.checkFinished=s.checkFinished.bind(Object(d.a)(s)),s.updateScore=s.updateScore.bind(Object(d.a)(s)),s.componentDidMount=s.componentDidMount.bind(Object(d.a)(s)),s.putHighScore=s.putHighScore.bind(Object(d.a)(s)),s}return Object(o.a)(i,[{key:"putHighScore",value:function(e){if(8!==this.foundCorrect||this.posted)this.foundCorrect<8?alert("You must finish the game before submitting score!"):this.posted&&alert("Already posted!");else{var t="https://wiking7.herokuapp.com/";console.log(t);var i=JSON.stringify({name:e,score:this.numRounds,time:this.state.time});console.log("posting front"),console.log(i),fetch("https://wiking7.herokuapp.com/api/highScore",{method:"POST",body:i,headers:{"Content-Type":"application/json"}}),this.posted=!0}}},{key:"setBoard",value:function(){for(var e=this,t=[],i=0,s=1;s<9;s++)t.push({value:s,id:i,isFlipped:!1,found:!1}),t.push({value:s,id:i+1,isFlipped:!1,found:!1}),i+=2;var n=this.shuffleBoard(t);this.setState({cards:n}),this.foundCorrect=0,this.flippedCards=0,this.numRounds=0,this.posted=!1,clearInterval(this.interval),this.setState({time:0}),this.interval=setInterval((function(){return e.setState({time:e.state.time+1})}),1e3)}},{key:"shuffleBoard",value:function(e){for(var t=e,i=t.length-1;i>0;i--){var s=Math.floor(Math.random()*(i+1)),n=[t[s],t[i]];t[i]=n[0],t[s]=n[1]}return t}},{key:"onFlip",value:function(e){var t=this.state.cards;2===this.flippedCards&&this.resetFlipped();for(var i=0;i<t.length;i++)if(t[i].id===e){if(t[i].isFlipped||t[i].found)break;this.flippedCards+=1,t[i].isFlipped=!0,this.setState({cards:t},(function(){console.log("card flipped")}))}2===this.flippedCards&&(this.checkMatch(),this.addRound(),this.checkFinished())}},{key:"addRound",value:function(){this.numRounds+=1}},{key:"checkFinished",value:function(){8===this.foundCorrect&&(clearInterval(this.interval),this.updateScore())}},{key:"updateScore",value:function(){this.lowestScore?this.numRounds<this.lowestScore&&(this.lowestScore=this.numRounds):this.lowestScore=this.numRounds}},{key:"checkMatch",value:function(){var e=this.state.cards.filter((function(e){return e.isFlipped&&!e.found}));if(e[0].value===e[1].value){for(var t=this.state.cards,i=0;i<t.length;i++)t[i].value===e[0].value&&(t[i].found=!0);this.setState({cards:t}),this.foundCorrect+=1,this.flippedCards=0}}},{key:"resetFlipped",value:function(){for(var e=this.state.cards,t=0;t<e.length;t++)e[t].found||(e[t].isFlipped=!1);this.setState({cards:e}),this.flippedCards=0}},{key:"componentDidMount",value:function(){this.setBoard()}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"outerContainer",children:[Object(u.jsx)("div",{className:"gameContainer",children:Object(u.jsx)(j,{onLoad:this.setBoard,onFlip:this.onFlip,cards:this.state.cards})}),Object(u.jsxs)("div",{className:"menuScoreContainer",children:[Object(u.jsxs)("div",{className:"menuContainer",children:[Object(u.jsxs)("div",{className:"dataBar",children:["            ",Object(u.jsx)("button",{className:"start-button",onClick:function(){e.setBoard()},children:"Restart"})]}),Object(u.jsxs)("div",{className:"dataBar",children:[Object(u.jsx)("p",{children:"Time:"}),Object(u.jsxs)("p",{children:[" ",this.state.time]})]}),Object(u.jsxs)("div",{className:"dataBar",children:[Object(u.jsx)("p",{children:"Round:"}),Object(u.jsxs)("p",{children:[" ",this.numRounds]})]}),Object(u.jsxs)("div",{className:"dataBar",children:[Object(u.jsx)("p",{children:"Correct:"}),Object(u.jsxs)("p",{children:[" ",this.foundCorrect," / 8"]})]}),Object(u.jsxs)("div",{className:"dataBar",children:[Object(u.jsx)("p",{children:"Best score: "}),Object(u.jsx)("p",{children:this.lowestScore?this.lowestScore:"-"})]})]}),Object(u.jsx)("div",{className:"highScoreContainer",children:Object(u.jsx)(b,{addHighScore:this.putHighScore})})]})]})}}]),i}(n.a.Component);a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ab5b85ce.chunk.js.map