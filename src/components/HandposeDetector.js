import React, { useState, useEffect, useRef } from "react";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import victory from "../images/paper.png";
import thumbs_up from "../images/rock.png";

import * as fp from "fingerpose";

const HandposeDetector = () => {
  const webcamRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = 500;
      const videoHeight = 500;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
     

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

          console.log(maxConfidence);

          console.log(gesture.gestures[1].name);
          setEmoji(gesture.gestures[1].name);
          console.log(emoji);
        }
      }
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        style={{
          width: 200,
          height: 300,
        }}
      />

      {emoji !== null ? (
        <img
          src={images[emoji]}
          style={{
            // position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 400,
            bottom: 500,
            right: 0,
            textAlign: "center",
            height: 100,
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default HandposeDetector;
