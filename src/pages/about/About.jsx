// import "./about.scss";

// import { useReducer } from "react";

// import React from "react";

// export default function About() {
//   let intialState = {
//     run: 0,
//     wicket: 0,
//     ball: 0,
//     strike1: "Shamim",
//     strike2: "Masud",
//     strike1Run: 0,
//     strike2Run: 0,
//     extraRun: 0,
//     freeHit: false,

//     thisOver: "",
//   };
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "runOnRightBall":
//         return {
//           ...state,
//           run: state.run + action.value,
//           ball: state.ball + 1,
//           thisOver: state.thisOver + action.value,
//           freeHit: false,
//         };

//       case "runOnWideBall":
//         return {
//           ...state,
//           run: state.run + action.value,
//           extraRun: state.extraRun + action.value,

//           thisOver: state.thisOver + `${action.value}WD    `,
//         };
//       case "runOnNoBall":
//         return {
//           ...state,
//           run: state.run + action.value,
//           extraRun: state.extraRun + action.value,

//           thisOver: state.thisOver + `${action.value}NB    `,
//           freeHit: true,
//         };
//       case "wicketInRightBall":
//         return {
//           ...state,
//           ball: state.ball + 1,
//           wicket: state.wicket + 1,
//           thisOver: state.thisOver + `W`,

//           freeHit: false,
//         };
//       case "wicketInNoRightBall":
//         return {
//           ...state,
//           wicket: state.wicket + 1,
//           thisOver: state.thisOver + `W`,
//         };

//       default:
//         return state;
//     }
//   };
//   const [data, dispatch] = useReducer(reducer, intialState);
//   return (
//     <div className="about">
//       <div className="runScreen">
//         <div className="main">
//           <div className="runAndWicket">
//             <span>Ban</span> {data.run}/{data.wicket}
//           </div>
//           <div className="over">
//             <span> Over</span> {Math.floor(data.ball / 6)}.
//             {data.ball - Math.floor(data.ball / 6) * 6}
//           </div>
//           <div className="extraRun">
//             <span>Extra</span> {data.extraRun}
//           </div>
//           <div className="runRate">
//             <span>Run Rate</span>{" "}
//             {(data.run / (data.ball / 6)).toFixed(2) || ""}
//           </div>
//           <div className="batsmans">
//             <div className="strike1">{data.strike1}</div>
//             <div className="starike2">{data.strike2}</div>
//           </div>

//           <div className="thisOver">
//             <span> This Over </span> {data.thisOver}
//           </div>
//         </div>
//       </div>
//       <div className="inputSection">
//         <div className="heading">Run On Right Ball</div>
//         <div className="inputRow runOnRightBall">
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnRightBall",
//                 value: 0,
//               })
//             }
//           >
//             0
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnRightBall",
//                 value: 1,
//               })
//             }
//           >
//             1
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnRightBall",
//                 value: 2,
//               })
//             }
//           >
//             2
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnRightBall",
//                 value: 3,
//               })
//             }
//           >
//             3
//           </span>

//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnRightBall",
//                 value: 4,
//               })
//             }
//           >
//             4
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnRightBall",
//                 value: 5,
//               })
//             }
//           >
//             5
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnRightBall",
//                 value: 6,
//               })
//             }
//           >
//             6
//           </span>
//         </div>
//         <div className="heading">Run On Wide Ball</div>
//         <div className="inputRow runOnRightBall">
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnWideBall",
//                 value: 1,
//               })
//             }
//           >
//             1wd
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnWideBall",
//                 value: 2,
//               })
//             }
//           >
//             2wd
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnWideBall",
//                 value: 3,
//               })
//             }
//           >
//             3wd
//           </span>

//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnWideBall",
//                 value: 4,
//               })
//             }
//           >
//             4wd
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnWideBall",
//                 value: 5,
//               })
//             }
//           >
//             5wd
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnWideBall",
//                 value: 6,
//               })
//             }
//           >
//             6wd
//           </span>
//         </div>
//         <div className="heading">Bye Run</div>
//         <div className="inputRow runOnRightBall">
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnNoBall",
//                 value: 1,
//               })
//             }
//           >
//             1nb
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnNoBall",
//                 value: 2,
//               })
//             }
//           >
//             2nb
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnNoBall",
//                 value: 3,
//               })
//             }
//           >
//             3nb
//           </span>

//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnNoBall",
//                 value: 4,
//               })
//             }
//           >
//             4nb
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnNoBall",
//                 value: 5,
//               })
//             }
//           >
//             5nb
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "runOnNoBall",
//                 value: 6,
//               })
//             }
//           >
//             6nb
//           </span>
//         </div>
//         <div className="heading">Wicket</div>
//         <div className="inputRow runOnRightBall">
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "wicketInRightBall",
//                 value: 1,
//               })
//             }
//           >
//             Wicket On Right Ball{" "}
//           </span>
//           <span
//             onClick={() =>
//               dispatch({
//                 type: "wicketInNoRightBall",
//                 value: 2,
//               })
//             }
//           >
//             Wicket Without Right Ball
//           </span>
//         </div>
//       </div>
//       <div className={data.freeHit ? "freeHit active" : "freeHit"}>
//         <span>Free Heat!</span>
//       </div>
//     </div>
//   );
// }
