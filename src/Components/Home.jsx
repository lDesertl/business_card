import React, { useEffect, useState, useRef } from "react";
import "../Styles/Home.scss";
import Stars from "./Stars";
import SolarSystem from "../SolarSystem/SolarSystem";
const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransition, setIsTransition] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const setTransition = (index, value) => {
    setIsTransition((prevTransition) => {
      const newTransition = [...prevTransition];
      newTransition[index] = value;
      return newTransition;
    });
  };
  useEffect(() => {
    let timer;
    if (isPressed) {
      setIsAnimating(true);
      timer = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          if (i >= isTransition.length) {
            clearInterval(interval);
          } else {
            setTransition(i, true);
            i++;
          }
        }, 50);
      }, 2000);
      return () => {
        clearTimeout(timer);
        setIsAnimating(false);
      };
    }
  }, [isPressed, isTransition]);
  const [loading, setLoading] = useState(true);
  const buttonRef = useRef(null);

  const handleMove = (event) => {
    if (buttonRef.current) {
      const { clientX, clientY } = event.touches ? event.touches[0] : event;
      const { left, top, right, bottom } =
        buttonRef.current.getBoundingClientRect();
      if (
        clientX < left ||
        clientX > right ||
        clientY < top ||
        clientY > bottom
      ) {
        setIsPressed(false);
      }
    }
  };

  return (
    <div className="Home">
      <div className={`LoaderBox ${!loading ? `LoaderBoxAnimation` : ``}`}>
        <div className={`Text ${!loading ? `Hidden` : ``}`}>
          The loading may take some time, don't worry.
        </div>
        <div className={`Loader ${!loading ? `LoaderAnimation` : ``}`}>
          {loading ? <div className="LoaderRing"></div> : ``}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            fill="none"
            preserveAspectRatio="xMidYMid  slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1759 1080C1172.33 1080 586.167 1080 0.000156999 1080C7.79986e-05 720 7.8e-05 360 0 0.000254035C640 0.000127035 1280 0.000127 1920 0C1920 360 1920 719.999 1920 1080C1866.5 1080 1813 1080 1759 1080ZM1002.25 513.267C999.598 510.077 997.206 506.624 994.259 503.739C978.551 488.359 954.159 485.602 934.817 496.838C915.645 507.975 906.069 530.611 911.459 552.053C916.867 573.565 936.144 589.446 957.889 589.941C977.254 590.383 992.558 582.425 1002.61 565.899C1013.02 548.806 1012.47 531.217 1002.25 513.267Z"
              fill="#000714"
            />
            <path
              d="M308.5 410L312.204 421.401H324.192L314.494 428.448L318.198 439.849L308.5 432.802L298.802 439.849L302.506 428.448L292.808 421.401H304.796L308.5 410Z"
              fill="white"
            />
            <g filter="url(#filter0_f_34_85)">
              <path
                d="M308.5 401L314.225 418.62L332.752 418.62L317.763 429.51L323.489 447.13L308.5 436.24L293.511 447.13L299.237 429.51L284.248 418.62L302.775 418.62L308.5 401Z"
                fill="white"
              />
            </g>
            <path
              d="M481.5 219L485.204 230.401H497.192L487.494 237.448L491.198 248.849L481.5 241.802L471.802 248.849L475.506 237.448L465.808 230.401H477.796L481.5 219Z"
              fill="white"
            />
            <g filter="url(#filter1_f_34_85)">
              <path
                d="M481.5 210L487.225 227.62L505.752 227.62L490.763 238.51L496.489 256.13L481.5 245.24L466.511 256.13L472.237 238.51L457.248 227.62L475.775 227.62L481.5 210Z"
                fill="white"
              />
            </g>
            <path
              d="M173.5 209L177.204 220.401H189.192L179.494 227.448L183.198 238.849L173.5 231.802L163.802 238.849L167.506 227.448L157.808 220.401H169.796L173.5 209Z"
              fill="white"
            />
            <g filter="url(#filter2_f_34_85)">
              <path
                d="M173.5 200L179.225 217.62L197.752 217.62L182.763 228.51L188.489 246.13L173.5 235.24L158.511 246.13L164.237 228.51L149.248 217.62L167.775 217.62L173.5 200Z"
                fill="white"
              />
            </g>
            <path
              d="M58.5 591L62.2045 602.401H74.1924L64.494 609.448L68.1985 620.849L58.5 613.802L48.8015 620.849L52.506 609.448L42.8076 602.401H54.7955L58.5 591Z"
              fill="white"
            />
            <g filter="url(#filter3_f_34_85)">
              <path
                d="M58.5 582L64.2251 599.62L82.7519 599.62L67.7634 610.51L73.4885 628.13L58.5 617.24L43.5115 628.13L49.2366 610.51L34.2481 599.62L52.7749 599.62L58.5 582Z"
                fill="white"
              />
            </g>
            <path
              d="M224.5 887L228.204 898.401H240.192L230.494 905.448L234.198 916.849L224.5 909.802L214.802 916.849L218.506 905.448L208.808 898.401H220.796L224.5 887Z"
              fill="white"
            />
            <g filter="url(#filter4_f_34_85)">
              <path
                d="M224.5 878L230.225 895.62L248.752 895.62L233.763 906.51L239.489 924.13L224.5 913.24L209.511 924.13L215.237 906.51L200.248 895.62L218.775 895.62L224.5 878Z"
                fill="white"
              />
            </g>
            <path
              d="M523.5 574L527.204 585.401H539.192L529.494 592.448L533.198 603.849L523.5 596.802L513.802 603.849L517.506 592.448L507.808 585.401H519.796L523.5 574Z"
              fill="white"
            />
            <g filter="url(#filter5_f_34_85)">
              <path
                d="M523.5 565L529.225 582.62L547.752 582.62L532.763 593.51L538.489 611.13L523.5 600.24L508.511 611.13L514.237 593.51L499.248 582.62L517.775 582.62L523.5 565Z"
                fill="white"
              />
            </g>
            <path
              d="M325.5 654L329.204 665.401H341.192L331.494 672.448L335.198 683.849L325.5 676.802L315.802 683.849L319.506 672.448L309.808 665.401H321.796L325.5 654Z"
              fill="white"
            />
            <g filter="url(#filter6_f_34_85)">
              <path
                d="M325.5 645L331.225 662.62L349.752 662.62L334.763 673.51L340.489 691.13L325.5 680.24L310.511 691.13L316.237 673.51L301.248 662.62L319.775 662.62L325.5 645Z"
                fill="white"
              />
            </g>
            <path
              d="M1597.5 952L1601.2 963.401H1613.19L1603.49 970.448L1607.2 981.849L1597.5 974.802L1587.8 981.849L1591.51 970.448L1581.81 963.401H1593.8L1597.5 952Z"
              fill="white"
            />
            <g filter="url(#filter7_f_34_85)">
              <path
                d="M1597.5 943L1603.23 960.62L1621.75 960.62L1606.76 971.51L1612.49 989.13L1597.5 978.24L1582.51 989.13L1588.24 971.51L1573.25 960.62L1591.77 960.62L1597.5 943Z"
                fill="white"
              />
            </g>
            <path
              d="M1780.5 549L1784.2 560.401H1796.19L1786.49 567.448L1790.2 578.849L1780.5 571.802L1770.8 578.849L1774.51 567.448L1764.81 560.401H1776.8L1780.5 549Z"
              fill="white"
            />
            <g filter="url(#filter8_f_34_85)">
              <path
                d="M1780.5 540L1786.23 557.62L1804.75 557.62L1789.76 568.51L1795.49 586.13L1780.5 575.24L1765.51 586.13L1771.24 568.51L1756.25 557.62L1774.77 557.62L1780.5 540Z"
                fill="white"
              />
            </g>
            <path
              d="M1528.5 143L1532.2 154.401H1544.19L1534.49 161.448L1538.2 172.849L1528.5 165.802L1518.8 172.849L1522.51 161.448L1512.81 154.401H1524.8L1528.5 143Z"
              fill="white"
            />
            <g filter="url(#filter9_f_34_85)">
              <path
                d="M1528.5 134L1534.23 151.62L1552.75 151.62L1537.76 162.51L1543.49 180.13L1528.5 169.24L1513.51 180.13L1519.24 162.51L1504.25 151.62L1522.77 151.62L1528.5 134Z"
                fill="white"
              />
            </g>
            <path
              d="M1780.5 219L1784.2 230.401H1796.19L1786.49 237.448L1790.2 248.849L1780.5 241.802L1770.8 248.849L1774.51 237.448L1764.81 230.401H1776.8L1780.5 219Z"
              fill="white"
            />
            <g filter="url(#filter10_f_34_85)">
              <path
                d="M1780.5 210L1786.23 227.62L1804.75 227.62L1789.76 238.51L1795.49 256.13L1780.5 245.24L1765.51 256.13L1771.24 238.51L1756.25 227.62L1774.77 227.62L1780.5 210Z"
                fill="white"
              />
            </g>
            <path
              d="M1450.5 482L1454.2 493.401H1466.19L1456.49 500.448L1460.2 511.849L1450.5 504.802L1440.8 511.849L1444.51 500.448L1434.81 493.401H1446.8L1450.5 482Z"
              fill="white"
            />
            <g filter="url(#filter11_f_34_85)">
              <path
                d="M1450.5 473L1456.23 490.62L1474.75 490.62L1459.76 501.51L1465.49 519.13L1450.5 508.24L1435.51 519.13L1441.24 501.51L1426.25 490.62L1444.77 490.62L1450.5 473Z"
                fill="white"
              />
            </g>
            <path
              d="M1285.5 270L1289.2 281.401H1301.19L1291.49 288.448L1295.2 299.849L1285.5 292.802L1275.8 299.849L1279.51 288.448L1269.81 281.401H1281.8L1285.5 270Z"
              fill="white"
            />
            <g filter="url(#filter12_f_34_85)">
              <path
                d="M1285.5 261L1291.23 278.62L1309.75 278.62L1294.76 289.51L1300.49 307.13L1285.5 296.24L1270.51 307.13L1276.24 289.51L1261.25 278.62L1279.77 278.62L1285.5 261Z"
                fill="white"
              />
            </g>
            <path
              d="M723.5 84L727.204 95.4012H739.192L729.494 102.448L733.198 113.849L723.5 106.802L713.802 113.849L717.506 102.448L707.808 95.4012H719.796L723.5 84Z"
              fill="white"
            />
            <g filter="url(#filter13_f_34_85)">
              <path
                d="M723.5 75L729.225 92.6201L747.752 92.6201L732.763 103.51L738.489 121.13L723.5 110.24L708.511 121.13L714.237 103.51L699.248 92.6201L717.775 92.6201L723.5 75Z"
                fill="white"
              />
            </g>
            <path
              d="M1023.5 193L1027.2 204.401H1039.19L1029.49 211.448L1033.2 222.849L1023.5 215.802L1013.8 222.849L1017.51 211.448L1007.81 204.401H1019.8L1023.5 193Z"
              fill="white"
            />
            <g filter="url(#filter14_f_34_85)">
              <path
                d="M1023.5 184L1029.23 201.62L1047.75 201.62L1032.76 212.51L1038.49 230.13L1023.5 219.24L1008.51 230.13L1014.24 212.51L999.248 201.62L1017.77 201.62L1023.5 184Z"
                fill="white"
              />
            </g>
            <path
              d="M672.5 346L676.204 357.401H688.192L678.494 364.448L682.198 375.849L672.5 368.802L662.802 375.849L666.506 364.448L656.808 357.401H668.796L672.5 346Z"
              fill="white"
            />
            <g filter="url(#filter15_f_34_85)">
              <path
                d="M672.5 337L678.225 354.62L696.752 354.62L681.763 365.51L687.489 383.13L672.5 372.24L657.511 383.13L663.237 365.51L648.248 354.62L666.775 354.62L672.5 337Z"
                fill="white"
              />
            </g>
            <path
              d="M811.5 896L815.204 907.401H827.192L817.494 914.448L821.198 925.849L811.5 918.802L801.802 925.849L805.506 914.448L795.808 907.401H807.796L811.5 896Z"
              fill="white"
            />
            <g filter="url(#filter16_f_34_85)">
              <path
                d="M811.5 887L817.225 904.62L835.752 904.62L820.763 915.51L826.489 933.13L811.5 922.24L796.511 933.13L802.237 915.51L787.248 904.62L805.775 904.62L811.5 887Z"
                fill="white"
              />
            </g>
            <path
              d="M574.5 836L578.204 847.401H590.192L580.494 854.448L584.198 865.849L574.5 858.802L564.802 865.849L568.506 854.448L558.808 847.401H570.796L574.5 836Z"
              fill="white"
            />
            <g filter="url(#filter17_f_34_85)">
              <path
                d="M574.5 827L580.225 844.62L598.752 844.62L583.763 855.51L589.489 873.13L574.5 862.24L559.511 873.13L565.237 855.51L550.248 844.62L568.775 844.62L574.5 827Z"
                fill="white"
              />
            </g>
            <path
              d="M1310.5 739L1314.2 750.401H1326.19L1316.49 757.448L1320.2 768.849L1310.5 761.802L1300.8 768.849L1304.51 757.448L1294.81 750.401H1306.8L1310.5 739Z"
              fill="white"
            />
            <g filter="url(#filter18_f_34_85)">
              <path
                d="M1310.5 730L1316.23 747.62L1334.75 747.62L1319.76 758.51L1325.49 776.13L1310.5 765.24L1295.51 776.13L1301.24 758.51L1286.25 747.62L1304.77 747.62L1310.5 730Z"
                fill="white"
              />
            </g>
            <path
              d="M1699.5 755L1703.2 766.401H1715.19L1705.49 773.448L1709.2 784.849L1699.5 777.802L1689.8 784.849L1693.51 773.448L1683.81 766.401H1695.8L1699.5 755Z"
              fill="white"
            />
            <g filter="url(#filter19_f_34_85)">
              <path
                d="M1699.5 746L1705.23 763.62L1723.75 763.62L1708.76 774.51L1714.49 792.13L1699.5 781.24L1684.51 792.13L1690.24 774.51L1675.25 763.62L1693.77 763.62L1699.5 746Z"
                fill="white"
              />
            </g>
            <path
              d="M84.5 75L88.2045 86.4012H100.192L90.494 93.4476L94.1985 104.849L84.5 97.8024L74.8015 104.849L78.506 93.4476L68.8076 86.4012H80.7955L84.5 75Z"
              fill="white"
            />
            <g filter="url(#filter20_f_34_85)">
              <path
                d="M84.5 66L90.2251 83.6201L108.752 83.6201L93.7634 94.5099L99.4885 112.13L84.5 101.24L69.5115 112.13L75.2366 94.5099L60.2481 83.6201L78.7749 83.6201L84.5 66Z"
                fill="white"
              />
            </g>
            <path
              d="M1118.5 845L1122.2 856.401H1134.19L1124.49 863.448L1128.2 874.849L1118.5 867.802L1108.8 874.849L1112.51 863.448L1102.81 856.401H1114.8L1118.5 845Z"
              fill="white"
            />
            <g filter="url(#filter21_f_34_85)">
              <path
                d="M1118.5 836L1124.23 853.62L1142.75 853.62L1127.76 864.51L1133.49 882.13L1118.5 871.24L1103.51 882.13L1109.24 864.51L1094.25 853.62L1112.77 853.62L1118.5 836Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_34_85"
                x="254.248"
                y="371"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter1_f_34_85"
                x="427.248"
                y="180"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter2_f_34_85"
                x="119.248"
                y="170"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter3_f_34_85"
                x="4.24805"
                y="552"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter4_f_34_85"
                x="170.248"
                y="848"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter5_f_34_85"
                x="469.248"
                y="535"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter6_f_34_85"
                x="271.248"
                y="615"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter7_f_34_85"
                x="1543.25"
                y="913"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter8_f_34_85"
                x="1726.25"
                y="510"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter9_f_34_85"
                x="1474.25"
                y="104"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter10_f_34_85"
                x="1726.25"
                y="180"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter11_f_34_85"
                x="1396.25"
                y="443"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter12_f_34_85"
                x="1231.25"
                y="231"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter13_f_34_85"
                x="669.248"
                y="45"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter14_f_34_85"
                x="969.248"
                y="154"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter15_f_34_85"
                x="618.248"
                y="307"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter16_f_34_85"
                x="757.248"
                y="857"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter17_f_34_85"
                x="520.248"
                y="797"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter18_f_34_85"
                x="1256.25"
                y="700"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter19_f_34_85"
                x="1645.25"
                y="716"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter20_f_34_85"
                x="30.248"
                y="36"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
              <filter
                id="filter21_f_34_85"
                x="1064.25"
                y="806"
                width="108.504"
                height="106.13"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_34_85"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className={`SolarSystem ${isTransition[5] ? `SolarSystemActive` : ``}`}
      >
        <SolarSystem setLoading={setLoading} />
      </div>
      {isTransition[5] ? (
        <div className="StarsBox StarsBoxAnimation">
          <Stars />
        </div>
      ) : (
        ``
      )}
      <div className={`ButtonBox ${isTransition[0] ? `Hidden` : ``}`}>
        {loading ? (
          ``
        ) : (
          <div
            className={`Button ${isAnimating ? `animating` : ``}`}
            ref={buttonRef}
            onMouseDown={() => {
              setIsPressed(true);
            }}
            onMouseUp={() => {
              setIsPressed(false);
            }}
            onMouseLeave={() => {
              setIsPressed(false);
            }}
            onTouchStart={() => {
              setIsPressed(true);
            }}
            onTouchEnd={() => {
              setIsPressed(false);
            }}
            onTouchMove={handleMove}
          >
            HOLD
          </div>
        )}
      </div>
      <div
        className={`Landscape ${isTransition[5] ? `LandscapeAnimation` : ``}`}
      >
        <div className={`Sky ${isTransition[5] ? `Transition` : ``}`}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid  slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H1920V1080H0V0Z" fill="#D9D9D9" />
            <path d="M0 0H1920V1080H0V0Z" fill="url(#paint0_linear_6_152)" />
            <defs>
              <linearGradient
                id="paint0_linear_6_152"
                x1="958"
                y1="1080"
                x2="958"
                y2="130.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#17E3D7" />
                <stop offset="0.165" stop-color="#0F9491" />
                <stop offset="0.3" stop-color="#096063" />
                <stop offset="0.415" stop-color="#085459" />
                <stop offset="0.51" stop-color="#07464C" />
                <stop offset="0.585" stop-color="#053C43" />
                <stop offset="0.675" stop-color="#042932" />
                <stop offset="0.74" stop-color="#03222C" />
                <stop offset="0.805" stop-color="#021B26" />
                <stop offset="0.885" stop-color="#01121E" />
                <stop offset="0.925" stop-color="#010C19" />
                <stop offset="1" stop-color="#000714" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          className={`Mountains ${isTransition[6] ? `MountainsAnimation` : ``}`}
        >
          <div className={`Mountains6 ${isTransition[6] ? `Transition` : ``}`}>
            <svg
              width="1920"
              height="299"
              viewBox="0 0 1920 299"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1920 7.42858C1920 104.394 1920 201.359 1920 298.359C1280.18 298.359 640.353 298.359 0 298.359C0 199.255 0 100.116 0.670449 0.384431C16.376 -1.25173 29.9763 2.5346 43.6116 7.9543C56.1962 12.9563 69.5286 16.8779 82.9526 19.7424C94.6886 22.2468 107.066 22.3193 119.051 24.0512C125.6 24.9974 131.841 27.5037 138.364 28.7024C155.25 31.8054 170.546 37.8361 185.023 46.0942C193.193 50.7551 202.086 54.8647 211.272 57.6166C227.851 62.583 244.8 66.6725 261.781 70.4798C271.2 72.5916 280.946 74.0816 290.634 74.6375C310.488 75.7766 330.36 76.3509 348.273 85.3255C362.954 92.681 378.799 94.8007 395.403 93.8854C397.775 93.7546 400.243 93.8279 402.56 94.2546C421.957 97.8271 441.345 101.443 460.7 105.188C466.277 106.268 471.656 108.509 477.267 109.027C507.188 111.792 537.126 114.495 567.117 116.55C580.011 117.433 593.108 116.004 606.007 116.864C624.777 118.116 642.062 112.284 659.269 107.994C674.723 104.142 690.131 102.08 705.738 101.697C736.704 100.937 767.711 101.329 798.699 101.557C805.327 101.606 812.328 102.021 818.49 103.935C835.319 109.163 852.779 109.734 870.169 110.18C893.212 110.77 916.291 110.151 939.349 110.429C947.436 110.527 955.597 111.282 963.564 112.532C984.312 115.786 1005.07 119.499 1026.21 117.76C1034.45 117.083 1043.3 115.174 1050.3 111.504C1062.08 105.33 1073.06 98.783 1087.63 98.8283C1148.88 99.0192 1210.14 98.8831 1271.4 98.9236C1274.49 98.9257 1277.6 99.2908 1280.65 99.7742C1294.47 101.971 1308.18 105.199 1322.11 106.324C1345.63 108.225 1367.17 100.155 1388.73 93.3964C1396.49 90.9633 1403.38 86.4471 1410.85 83.2157C1425.43 76.9108 1440.99 75.8601 1457.06 75.8203C1477.37 75.7699 1497.85 75.4219 1517.95 73.1073C1535.12 71.1304 1551.87 66.2746 1568.76 62.5424C1582.17 59.5806 1595.52 56.4176 1608.88 53.296C1620.65 50.5451 1632.52 48.0687 1644.13 44.8487C1657.02 41.273 1669.37 35.8118 1682.48 33.3357C1696.87 30.6191 1711.82 29.6231 1726.58 29.2191C1750.1 28.5752 1773.74 27.9433 1797.18 29.3233C1824.89 30.9554 1849.95 23.2869 1875.28 15.7266C1889.83 11.3861 1904.34 7.04393 1920 7.42858Z"
                fill="#06615B"
              />
            </svg>
          </div>
          <div className={`Mountains5 ${isTransition[5] ? `Transition` : ``}`}>
            <svg
              width="1920"
              height="384"
              viewBox="0 0 1920 384"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1919.83 117.569C1904.17 117.78 1929.04 373.659 1914.5 378C1889.17 385.56 1826.22 381.632 1798.5 380C1775.06 378.62 1769.52 377.356 1746 378C1731.24 378.404 1712.88 377.283 1698.5 380C1685.39 382.476 1670.89 374.424 1658 378C1646.39 381.22 1636.77 375.249 1625 378C1611.64 381.122 1590.41 377.038 1577 380C1560.11 383.732 1561.67 378.023 1544.5 380C1524.4 382.315 1507.32 381.95 1487 382C1470.93 382.04 1438.08 371.695 1423.5 378C1416.03 381.231 1401.26 375.567 1393.5 378C1371.95 384.759 1374.03 381.901 1350.5 380C1336.57 378.875 1335.76 380.196 1321.94 378C1318.9 377.517 1296.58 374.502 1293.5 374.5C1232.24 374.459 1255.76 378.191 1194.5 378C1179.93 377.955 1140.78 371.826 1129 378C1122 381.67 1090.73 379.323 1082.5 380C1061.36 381.739 1050.75 383.254 1030 380C1022.03 378.75 969.587 380.097 961.5 380C938.442 379.722 936.043 378.59 913 378C895.61 377.555 886.83 385.228 870.001 380C863.839 378.086 824.951 378.049 818.322 378C787.335 377.772 745.966 379.24 715 380C699.393 380.383 672.954 376.147 657.5 380C640.293 384.29 622.27 381.252 603.5 380C590.601 379.14 570.395 382.883 557.5 382C527.509 379.946 536.921 382.765 507 380C501.389 379.482 476.577 381.079 471 380C451.645 376.254 465.897 383.572 446.5 380C444.183 379.573 438.372 377.369 436 377.5C419.396 378.415 406.181 387.356 391.5 380C373.587 371.025 380.354 381.139 360.5 380C350.812 379.444 331.419 384.112 322 382C305.019 378.193 318.579 386.966 302 382C292.814 379.248 298.637 386.661 290.466 382C275.99 373.742 259.885 383.103 243 380C236.477 378.801 208.549 380.946 202 380C190.015 378.268 157.236 380.004 145.5 377.5C132.076 374.635 80.0845 385.002 67.5 380C53.8647 374.58 16.211 378.95 0.505406 380C-0.165043 357.957 -0.167985 66.441 0.5054 43.8395C27.7871 42.8017 54.394 42.211 81.0051 41.9229C85.953 41.8692 91.1351 42.4332 95.8317 43.7546C106.977 46.8902 117.684 51.3404 128.949 54.0164C152.473 59.6047 176.021 65.5509 199.989 69.0937C215.773 71.4269 232.848 72.6374 247.884 65.1572C258.085 60.0821 268.666 59.24 279.812 59.6287C283.888 59.7708 287.984 59.871 292.052 59.6756C298.924 59.3453 305.78 58.7643 313.318 58.2937C332.913 58.4052 351.835 58.6359 370.751 58.4485C372.925 58.427 374.5 57.3476 376.989 54.7355C381.5 50 385.723 50.1076 390.5 50.5C413.504 52.3894 434.295 55.0222 454.787 65.1496C458.5 70.5 459.5 73.5 465.011 77.941C468 84 468.415 87.0989 473.503 89.3854C478.767 91.7506 484.414 93.4544 490.212 95.7777C492.697 97.0133 494.775 98.1698 497.043 98.7846C516.462 104.049 536.09 108.766 555.307 114.547C571.965 119.558 588.905 120.995 606.288 120.89C616.339 120.829 626.395 121.704 636.452 121.776C652.219 121.888 668.135 121.173 679.519 109.866C691.578 97.8905 706.51 94.8756 723.557 96.4658C723.795 96.488 724.038 96.4656 724.278 96.4693C741.191 96.73 756.598 100.893 771.244 108.593C778.17 112.235 786.682 113.773 794.689 115.484C799.429 116.497 804.839 115.177 809.512 116.305C830.692 121.417 851.773 126.861 872.776 132.516C887.104 136.373 900.953 142.866 915.535 144.439C937.087 146.765 959.1 145.883 980.92 146.085C985.382 146.126 989.994 145.323 994.3 144.204C1003.48 141.819 1012.37 138.479 1021.63 136.435C1033.67 133.777 1045.92 131.773 1058.16 129.896C1073.92 127.48 1089.68 124.353 1105.58 123.553C1127.61 122.444 1149.76 123.009 1171.85 123.307C1178.47 123.397 1185.32 124.26 1191.61 126.035C1207.51 130.525 1223.09 135.91 1238.95 140.53C1242.85 141.664 1247.65 142.28 1251.48 141.36C1268.54 137.265 1285.52 132.871 1302.29 127.926C1320.13 122.663 1335.92 112.471 1355.37 110.925C1359.33 110.611 1363.39 109.626 1367.03 108.212C1378.29 103.84 1388.81 98.4964 1401.23 95.9375C1421.83 91.696 1442.39 88.1011 1463.52 87.7615C1484.89 87.4178 1506.28 87.3418 1527.64 87.8593C1537.53 88.0987 1544.77 84.9472 1552.26 79.6301C1561.3 73.219 1571.31 67.6089 1581.64 62.9391C1591.81 58.3439 1603.51 56.3189 1613.49 51.4819C1639.52 38.8643 1667.55 42.5935 1695.14 42.2785C1696.28 42.2654 1697.46 42.8081 1698.58 43.1867C1724.04 51.81 1750.33 50.3975 1776.64 48.0124C1783.73 47.3693 1790.68 44.6958 1797.72 44.5724C1816.76 44.2389 1831.87 36.325 1846.83 26.6183C1856.73 22.3816 1864.45 15.4114 1876.15 15.0833C1882.74 14.8988 1889.51 12.9226 1895.7 10.6766C1904 7.663 1911.81 3.60788 1919.83 0C1919.83 38.9913 1919.83 77.9825 1919.83 117.569Z"
                fill="#107973"
              />
            </svg>
          </div>
          <div className={`Mountains4 ${isTransition[4] ? `Transition` : ``}`}>
            <svg
              width="1921"
              height="385"
              viewBox="0 0 1921 385"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999875 18.0907C5.89678 19.953 11.266 21.8918 15.6059 24.9614C31.3661 36.1082 49.8906 39.9864 69.2671 40.0984C90.2244 40.2196 109.768 42.5697 128.497 52.1963C137.731 56.9422 149.873 58.553 160.857 59.0961C177.525 59.9201 194.356 58.9366 211.064 57.982C217.861 57.5936 224.996 56.1743 231.14 53.644C245.641 47.6721 260.536 48.9028 275.565 50.0897C288.929 51.1451 302.117 52.826 313.71 60.1122C306.948 61.0126 347.372 378.17 340.5 378.5C336.432 378.695 312.076 384.642 308 384.5C296.854 384.111 281.201 373.425 271 378.5C255.964 385.98 243.784 383.333 228 381C204.032 377.457 189.024 384.088 165.5 378.5C154.236 375.824 146.145 381.636 135 378.5C130.303 377.179 101.948 378.446 96.9996 378.5C70.3885 378.788 28.2817 380.558 0.999997 381C0.326612 372.035 0.999877 27.6068 0.999875 18.0907Z"
                fill="#209A93"
              />
              <path
                d="M573.5 67.5C577 66.5 578.755 66.0079 582.494 64.8088C601.37 58.755 620.128 53.3412 640.451 51.1956C663.575 48.7545 686.267 43.1045 709.121 38.7479C713.996 37.8186 718.764 36.4535 724.553 35.2202C726.184 34.7707 726.844 34.3903 727.503 34.0099C727.503 34.0099 727.486 34.013 728.153 34.0169C733.138 34.0229 737.467 33.8534 741.773 34.0619C751.75 34.545 760.99 36.1854 768.055 43.5961C779.349 55.4429 794.407 60.4494 811.761 60.7652C815.786 60.8384 819.782 61.7766 823.813 62.1276C843.138 63.8109 862.429 64.7219 881.491 60.133C898.705 55.9888 915.179 49.6591 933.49 48.7894C945.212 48.2325 956.075 44.02 966.069 38.0148C973.894 33.3134 982.203 28.0004 991.126 26.2531C1003.93 23.7467 1014.25 17.6637 1024 11.3441C1036.19 3.43963 1047.94 -2.44243 1063.46 1.00966C1072.02 3.44537 1080.83 5.37498 1089.06 8.49437C1094.56 10.5806 1099.38 14.1943 1104.25 17.4177C1111.08 21.931 1117.67 26.7175 1124.88 31.461C1129.56 37.0947 1134.97 40.5089 1142.97 40.464C1164.55 40.3428 1184.86 43.8948 1201.01 57.8333C1210.06 65.6479 1221.12 63.9893 1231.54 62.5047C1247.1 60.2873 1262.39 56.6335 1277.86 53.8468C1282.03 53.0943 1286.42 53.0534 1290.71 53.047C1326.25 52.9941 1361.79 53.2516 1397.32 52.921C1411.39 52.7901 1425.63 52.3157 1439.46 50.2681C1448.14 48.9829 1456.24 44.5319 1464.55 41.4095C1474.69 37.6012 1484.99 34.0667 1494.83 29.7189C1502.93 26.1414 1510.35 21.3999 1518.25 17.4476C1526.98 13.0749 1535.9 8.97829 1544.79 4.8512C1546.23 4.18 1547.93 3.69159 1549.55 3.59488C1565.3 2.65427 1581.05 1.9022 1596.79 0.922738C1612.37 -0.0467209 1627.41 2.10273 1641.91 6.96732C1652.44 10.5039 1663.26 10.9934 1674.36 11.3661C1681.76 11.6145 1689.42 13.4589 1696.33 15.9494C1707.11 19.8329 1717.76 22.8289 1729.63 22.7564C1745.67 22.6583 1761.73 23.0916 1777.74 23.8969C1800.76 25.0544 1823.73 26.7524 1847.12 28.5986C1833.04 38.5733 1937.54 382.666 1918.5 383C1911.45 383.123 1860.09 379.357 1853 380C1826.69 382.385 1819.46 387.123 1794 378.5C1790.59 377.344 1785.19 375.973 1772 380C1744.41 380.315 1779.03 367.382 1753 380C1743.02 384.837 1742.67 373.905 1732.5 378.5C1722.17 383.17 1728.54 372.089 1719.5 378.5C1712 383.817 1717.38 378.739 1707.5 378.5C1686.14 377.983 1718.37 376.156 1697 376.5C1675.88 376.84 1705.1 374.259 1684.5 378.5C1672.07 381.059 1572.76 374.129 1561.5 378.5C1557.86 379.915 1501.46 382.686 1497.5 383C1478.05 384.545 1436.34 371.237 1418.5 376.5C1401.74 381.445 1383.56 372.405 1366.5 376.5C1362.67 377.421 1314.39 381.134 1310.5 380C1294.64 375.38 1265.4 380.99 1249.5 376.5C1243.21 374.725 1209.12 376.589 1202.5 376.5C1180.41 376.202 1183.53 375.391 1161.5 376.5C1145.61 377.3 1095.26 377.584 1079.5 380C1067.26 381.877 1054.04 373.842 1042 376.5C1032.74 378.545 1019.18 374.115 1010 376.5C1005.69 377.619 982.962 372.541 978.5 372.5C956.68 372.299 969.052 372.325 947.5 370C932.918 368.427 939.328 376.357 925 372.5C903.997 366.846 920.179 377.612 899 372.5C894.326 371.372 886.23 373.513 881.491 372.5C873.483 370.788 880.869 376.141 873.943 372.5C859.298 364.799 874.914 370.261 858 370C839 372.5 861 376.5 814 370C796.952 368.41 797.059 360.524 785 372.5C773.616 383.806 766.267 376.613 750.5 376.5C740.443 376.428 690.738 376.439 680.686 376.5C663.304 376.605 618.158 386.511 601.5 381.5C582.283 375.719 510.8 381.764 491.38 376.5C489.113 375.885 493.864 99.2616 491.379 98.026C506.333 92.5872 521.657 87.5939 536.86 82.3315C547.898 78.5112 558.806 74.3935 569.666 70.1947C570.443 69.894 572 69 573.5 67.5Z"
                fill="#209A93"
              />
            </svg>
          </div>
          <div className={`Mountains3 ${isTransition[3] ? `Transition` : ``}`}>
            <svg
              width="1921"
              height="511"
              viewBox="0 0 1921 511"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M564.3 486.5C558.82 484.507 549.564 488.865 544.3 486.5C539.211 484.213 527.139 488.167 526.8 482.5C526.459 476.811 504.876 485.503 498.8 482.5C478.308 472.373 496.975 484.389 473.971 482.5C469.194 482.108 461.817 476.81 459.8 482.5C459.197 484.201 455.474 482.478 453.3 482.5C434.383 482.687 455.996 487.036 436.3 486.5C424.032 479.209 417.164 487.555 403.8 486.5C388.771 485.313 375.3 480.528 360.8 486.5C354.656 489.03 344.097 486.112 337.3 486.5C320.592 487.455 301.967 487.324 285.3 486.5C274.315 485.957 219.597 491.246 210.363 486.5C191.634 476.873 153.257 486.621 132.3 486.5C112.923 486.388 79.5598 505.647 63.7996 494.5C59.4597 491.43 5.79805 496.958 0.901143 494.5C0.901144 488.542 0.299583 203.481 0.901163 196.939C21.5896 194.73 34.8166 182.559 49.772 172.206C51.4297 171.888 52.7441 171.828 53.6559 171.263C65.9329 163.653 78.2558 156.094 90.2868 148.19C92.2525 146.899 91.9032 146.807 93 146C94.1341 145.166 94.6879 145.011 96 144.5C97.3363 143.98 99.6306 143.449 99.6306 143.449C99.6306 143.449 105.735 142.384 108.395 141.718C133.507 134.088 153.809 141.064 178 121.5C178.902 120.771 183.369 118.253 184.5 118C184.986 117.891 188.169 116.603 188.169 116.603C188.169 116.603 202.4 114.412 209.025 113.046C214.935 111.828 220.725 110.16 226.568 108.69C227.808 108.476 229.047 108.261 231.266 107.774C240.923 105.779 249.6 104.056 258.278 102.333C259.466 102.073 260.653 101.812 262.792 101.4C264.8 101.166 265.297 100.926 266.912 101C270.326 101.157 271.972 102.703 275.127 104.017C285.598 108.375 290.89 112.227 300.099 118.848C301.669 119.976 302.503 120.67 304.074 121.796C307.492 124.245 311.934 123.694 313.046 127.75C313.09 127.909 313.101 128.002 313.147 128.161C313.761 130.278 315.856 130.303 317.374 131.9C320.071 134.739 320.97 137.705 323.082 140.144C333.648 152.342 343.857 164.822 355.216 176.423C359.455 180.752 366.04 184.363 372.309 185.877C390.427 190.254 408.897 193.525 427.293 196.966C434.808 198.371 442.486 199.095 450.585 200.225C452.919 201.244 454.704 202.27 456.609 203.074C466.671 207.321 476.704 211.628 486.89 215.633C489.252 216.562 492.171 216.391 494.821 217.179C501.023 222.608 506.927 227.938 513.539 232.466C520.849 237.471 528.663 241.944 536.519 246.28C547.392 252.282 558.508 257.94 569.738 264.123C569.647 265.74 609.077 483.199 608.3 483.5C597.44 487.699 602.837 482.68 591.8 486.5C576.596 491.762 579.572 481.391 564.3 486.5Z"
                fill="#19CABF"
              />
              <path
                d="M1920.15 140.425C1912.13 144.621 1917.1 505.986 1908.8 509C1902.61 511.246 1920.88 501.315 1914.3 501.5C1902.6 501.828 1897.1 505.142 1886.8 509C1862.93 507.265 1869.77 510.157 1846.75 509C1830.74 508.195 1847.34 508.902 1831.3 509C1819.43 509.073 1832.08 512.883 1821.3 509C1814.39 506.51 1810.2 509.248 1802.8 509C1791.7 508.627 1798.84 512.537 1788.3 509C1773.8 504.135 1768.38 508.031 1752.8 509C1737.06 509.979 1734.54 504.559 1718.8 505.5C1705.39 508.918 1704.25 508.329 1702.8 509C1693.91 513.127 1665.04 504.627 1656.3 509C1648.4 512.952 1632.39 501.923 1624.3 505.5C1614.46 509.848 1582.94 501.692 1572.8 505.5C1564.49 508.622 1510.98 504.215 1502.3 505.5C1488.47 507.548 1455.2 502.369 1441.13 502.5C1405.6 502.831 1395.33 497.447 1359.8 497.5C1355.51 497.506 1334.48 496.748 1330.3 497.5C1314.83 500.287 1318.36 495.283 1302.8 497.5C1292.38 498.985 1220.85 510.315 1211.8 502.5C1195.66 488.562 1134.88 505.379 1113.3 505.5C1105.3 505.545 1128.71 175.86 1125.05 170.229C1129.18 168.16 1133.18 166.541 1136.37 164.094C1146.93 155.981 1158.47 149.765 1171.9 145.778C1184.91 141.917 1198.08 137.775 1206.35 126.788C1209.1 123.14 1212.68 119.933 1216.19 116.786C1238.05 97.1506 1231.04 100.667 1260.51 100.555C1268.5 103.923 1276.79 106.184 1283.38 110.481C1295.95 118.685 1308.09 127.547 1319.36 137.103C1327.31 143.846 1334.97 151.514 1340.03 160.028C1343.83 166.414 1348.22 167.715 1354.95 167.704C1377.04 167.668 1399.13 167.828 1421.21 167.607C1427.86 167.541 1434.57 166.83 1441.13 165.801C1451.66 164.15 1462.15 162.227 1472.5 159.872C1475.04 159.294 1476.96 156.601 1479.71 154.912C1482.66 154.165 1485.09 153.427 1487.47 152.604C1497.21 149.249 1506.68 145.009 1516.73 142.721C1528.56 140.028 1534.66 132.464 1541.39 124.397C1549.23 116.193 1556.62 108.185 1564.22 99.7941C1566.27 96.3521 1568.11 93.2935 1569.95 90.235C1570.86 89.2542 1571.77 88.2735 1573.19 86.7025C1579.66 80.2851 1585.61 74.4579 1591.57 68.6307C1591.57 68.6307 1591.51 68.5849 1591.96 68.4166C1603.3 59.5411 1614.2 50.8338 1625.09 42.1265C1625.09 42.1265 1625.61 42.0318 1626.32 41.8603C1630.91 36.665 1634.78 31.6411 1638.65 26.6172C1638.65 26.6172 1638.99 26.1208 1639.49 25.6686C1640.7 23.6083 1640.78 24.608 1641.5 23C1641.5 23 1642.78 20.3044 1643.44 20.1854C1644.55 19.8303 1644.78 19.4856 1644.82 19.0323C1644.82 19.0323 1644.84 19.0342 1645.29 18.9113C1647.42 16.7744 1649.1 14.7604 1651.26 12.662C1657.45 6.98602 1661.59 -0.586253 1672.2 0.0360122C1673.28 0.0474119 1674.35 0.0588129 1676.16 0.587319C1684.98 2.81287 1690.95 3.75746 1698.3 6C1698.62 6.09885 1701.8 7.5 1702.3 8.5C1705.3 13.5 1707.3 12.5 1708.4 15.6348C1712.35 18.7267 1716.01 21.4778 1719.68 24.2289C1726.62 30.0109 1733.56 35.7929 1741.14 42.1577C1745.43 46.598 1749.08 50.4557 1752.82 54.7636C1754.32 57.1345 1755.72 59.0551 1757.21 61.4171C1760.95 66.2426 1764.42 70.7454 1768.27 74.982C1773.74 81.0106 1781.3 86.1441 1784.68 92.9318C1789.21 102.029 1796.47 108.599 1803.89 115.338C1816.76 127.036 1844.82 130.231 1860.99 121.999C1866.74 119.07 1872.5 117.461 1879.42 118.628C1892.93 120.906 1906.57 122.575 1920.15 124.496C1920.15 129.609 1920.15 134.723 1920.15 140.425Z"
                fill="#19CABF"
              />
              <path
                d="M1112.8 502C1097.37 498.987 1061.05 491.096 1048.85 499C1039.11 505.32 1025.78 496.494 1012.98 499C1004.05 500.747 998.102 494.299 990.278 499C980.283 505.005 976.943 498.443 965.221 499C946.91 499.87 889.013 497.856 871.799 502C852.737 506.589 849.625 503.683 830.299 502C826.268 501.649 816.325 499.073 812.299 499C794.946 498.684 786.593 513.847 775.299 502C768.235 494.589 691.276 502.483 681.299 502C676.994 501.792 732.29 172.788 727.299 172.788C739.977 162.921 753.14 152.845 766.733 143.243C779.588 134.161 792.702 125.341 806.06 116.843C818.608 108.859 831.426 101.169 844.511 93.8898C851.967 89.7417 860.452 87.0466 868.008 83.0177C876.144 78.6795 883.544 73.2797 891.607 68.8232C904.102 61.9167 914.789 50.8425 931.784 53.4336C938.526 54.4614 945.416 56.0502 951.543 58.6538C973.824 68.121 994.393 80.1634 1012.98 94.4647C1025.69 104.253 1037 115.474 1048.85 126.122C1101.3 135.5 1108.19 497.297 1112.8 502Z"
                fill="#19CABF"
              />
              <path
                d="M0.299316 152C9.05656 155.489 17.7635 159.66 26.5869 163.63C33.7225 166.841 40.9984 169.809 48.7267 172.961C34.8163 183.366 21.5893 195.537 0.900893 197.154C0.299313 182.296 0.299314 167.446 0.299316 152Z"
                fill="#28B1A9"
              />
            </svg>
          </div>
          <div className={`Mountains2 ${isTransition[2] ? `Transition` : ``}`}>
            <svg
              width="1916"
              height="747"
              viewBox="0 0 1916 747"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1225.38 288.422C1381.43 389.429 1324.29 389.293 1302.43 408.929C1298.93 412.076 1605.75 733.852 1603 737.5C1594.73 748.487 1548 733.639 1535 737.5C1521.57 741.487 1516.06 735.388 1505.5 743.5C1502.32 745.947 1483.65 741.505 1479 743.5C1471.29 738.827 1446.83 748.013 1440 743.5C1435.13 740.277 1419 739.586 1413.5 737.5C1405.27 734.381 1411.15 740.375 1402.5 737.5C1397.89 732.797 1367.64 741.663 1363 737.5C1351.14 726.852 1333.22 753.288 1320.5 743.5C1301.92 729.199 1293.28 746.967 1271 737.5C1264.87 734.896 1249.24 738.528 1242.5 737.5C1225.5 734.909 1219.5 730.593 1207 737.5C1198.94 741.957 1208.14 733.162 1200 737.5C1181.59 745.356 1195.96 733.352 1188.5 737.5C1175.41 744.78 1188.55 729.516 1176 737.5C1162.64 745.998 1176.79 728.419 1163.93 737.5C1150.34 747.103 1118.85 727.637 1105.5 737.5C1102.17 726.59 1048.85 736.562 1029 734.5C1029 751.571 1017.07 734.5 997.5 734.5C992.113 735.687 988.375 733.571 983.5 734.5C960.646 738.857 937.124 732.059 914 734.5C893.677 736.645 888.377 728.446 869.5 734.5C865.761 735.699 782.61 734.198 778.5 734.5C767.489 728.695 557.253 740.502 546.381 734.5C538.525 730.163 7.81019 751.005 0.5 746C-6.11199 741.473 466.215 351.526 460.433 345.889C464.232 343.31 467.719 341.537 470.932 339.44C476.539 335.78 481.977 331.92 487.999 328.049C492.02 326.239 493.925 325.143 497.433 323.429C497.888 323.323 499.288 322.429 500.681 321.661C503.758 319.966 506.275 318.75 509.353 317.541C515.927 315.378 515.933 316.429 522.433 310.429C522.481 310.435 524.605 307.362 524.947 307.238C525.558 306.759 525.827 306.404 526.139 306.103C526.225 306.021 526.324 306.047 526.392 305.973C526.433 305.929 526.628 305.732 526.933 305.429C526.933 305.429 527.433 304.929 527.862 304.701C528.433 304.429 528.73 303.764 529.129 303.136C529.521 302.605 529.848 302.406 530.618 302.197C531.307 301.748 531.63 301.405 531.963 301.091C531.973 301.12 532.431 300.48 532.933 300.429C534.909 298.633 535.869 297.495 537.386 295.748C537.431 295.746 538.029 294.581 538.433 294.429C539.127 293.574 538.933 293.929 538.933 293.429C538.933 293.429 539.089 293.448 539.42 293.311C540.019 292.823 539.682 293.237 539.933 292.929C539.918 292.972 540.504 292.117 540.839 292.135C541.376 291.709 541.578 291.266 541.895 290.458C542.122 289.602 542.489 289.92 542.602 289.429C542.602 289.429 543.918 287.925 544.433 287.929C545.86 287.416 544.939 287.505 546.381 286.882C548.706 284.443 548.581 284.606 550.433 281.929C550.498 281.353 552.681 279.31 552.688 279.078C552.688 279.078 553.053 278.394 553.433 278.429C554.061 278.427 554.747 277.055 555.434 276.929C556.453 276.001 555.848 276.477 556.46 275.656C558.434 274.929 555.934 276.429 556.756 275.497C557.328 274.911 557.561 274.503 557.988 273.814C558.918 272.945 559.654 272.358 560.777 271.672C561.497 271.217 561.83 270.859 562.126 270.531C562.09 270.561 562.061 270.478 562.585 270.473C566.934 267.429 565.434 267.929 572.005 260.22C572.066 260.248 572.016 260.134 572.526 260.163C576.603 256.009 580.172 251.826 583.799 247.653C583.859 247.664 583.74 247.681 584.075 247.545C584.678 247.054 584.947 246.7 585.172 246.344C585.129 246.342 585.096 246.272 585.597 246.258C590.114 240.359 594.13 234.474 598.169 228.605C598.192 228.621 598.162 228.631 598.49 228.487C599.063 227.98 599.307 227.617 599.505 227.252C599.459 227.252 599.455 227.17 599.969 227.197C603.147 225.538 601.934 225.929 606.434 222.429C606.468 222.437 606.666 220.823 607.222 220.885C611.286 218.811 614.794 216.675 618.333 214.54C618.365 214.541 618.32 214.571 618.864 214.609C621.919 212.915 624.429 211.183 626.971 209.451C627.004 209.452 626.958 209.481 627.526 209.53C630.254 208.886 632.706 208.559 634.524 207.436C642.44 202.543 650.47 197.732 657.872 192.275C663.335 188.247 667.892 183.266 672.799 178.755C672.745 178.8 672.768 178.671 673.311 178.774C679.93 173.913 686.007 168.949 692.601 163.941C695.261 162.719 697.848 161.891 699.467 160.299C706.147 153.73 711.058 145.745 719.967 140.951C721.155 140.312 721.54 138.513 722.783 137.178C726.337 134.216 729.406 131.326 732.997 128.392C737.231 126.336 741.17 124.58 744.578 122.229C747.104 120.487 748.941 117.97 751.503 115.597C753.906 114.563 755.891 113.73 758.436 112.9C761.576 111.122 764.157 109.341 766.924 107.332C767.442 106.844 767.828 106.701 768.715 106.657C769.843 106.197 770.526 105.755 771.22 105.358C771.231 105.404 771.127 105.383 771.468 105.272C772.108 104.836 772.409 104.51 772.704 104.179C772.698 104.175 772.709 104.186 773.271 104.183C779.649 100.73 785.464 97.2806 791.351 93.8419C791.421 93.8528 791.281 93.8652 791.846 93.9128C798.934 90.4286 801.434 88.9286 807.147 83.7249C807.148 83.7467 807.186 83.7225 807.725 83.7554C811.297 81.6599 814.328 79.5314 817.535 77.1503C818.013 76.5931 818.382 76.3756 819.345 76.2392C822.359 74.0641 824.844 71.8951 827.375 69.7322C827.419 69.7384 827.354 69.7933 827.687 69.6646C828.292 69.1908 828.564 68.8457 828.831 68.5281C828.826 68.5557 828.813 68.4894 829.349 68.5202C838.654 60.8995 847.422 53.2478 856.251 45.6178C856.312 45.6395 856.183 45.6278 856.73 45.6551C863.689 41.8712 870.102 38.06 876.722 34.1603C876.93 34.0717 877.391 34.0618 877.999 34.1277C885.503 30.7435 892.399 27.2936 899.342 23.8517C899.388 23.86 899.344 23.934 899.693 23.8394C900.327 23.4078 900.612 23.0708 900.883 22.7839C900.87 22.8339 900.861 22.7287 901.402 22.7658C904.513 21.1215 907.084 19.44 909.858 17.4702C910.497 16.6362 910.934 16.0906 911.371 15.5449C911.371 15.5449 911.241 15.2296 911.766 15.3057C913.821 14.4955 915.351 13.6092 917.309 12.6755C918.35 12.1485 918.962 11.6691 919.598 11.297C919.62 11.4045 919.529 11.201 920.084 11.2595C926.535 10.3432 931.768 8.67677 932.624 2.42856C932.658 2.44546 932.599 2.43057 933.197 2.46671C939.748 2.54488 944.658 3.83897 948.216 8.79018C950.962 12.6132 955.092 15.6638 958.729 19.526C967.172 42.2231 982.763 60.7436 999.25 78.8072C998.786 79.202 998.321 79.5968 997.857 79.9916C994.214 79.7076 990.571 79.4235 985.051 78.9931C986.699 82.4435 987.212 85.1949 988.99 86.9487C996.735 94.5871 1004.9 101.895 1012.82 109.4C1020.92 117.082 1028.92 124.854 1035.78 131.454C1032.69 141.241 1023.39 139.348 1016.56 140.091C1045.8 155.138 1077.29 166.972 1104.23 185.553C1103.98 186.127 1103.72 186.702 1103.46 187.277C1096.67 187.979 1089.89 188.681 1083.1 189.384C1083.04 190.153 1082.99 190.923 1082.93 191.693C1085.66 192.559 1088.38 193.438 1091.11 194.286C1093.56 195.047 1096.66 195.182 1098.38 196.612C1108.25 204.806 1115.55 214.446 1118.82 226.286C1119.34 228.156 1121.32 230.172 1123.26 231.195C1131.15 235.367 1139.29 239.18 1147.34 243.125C1147.23 243.544 1147.12 243.962 1147.01 244.381C1139.8 244.381 1132.59 244.381 1125.38 244.381C1125.27 245.029 1125.16 245.676 1125.05 246.324C1130.89 247.668 1136.65 249.54 1142.58 250.241C1153.29 251.507 1163.75 252.518 1173.15 258.229C1185.7 265.851 1198.96 272.572 1211.8 279.827C1216.49 282.475 1220.87 285.545 1225.38 288.422Z"
                fill="#28B1A9"
              />
              <path
                d="M1225.15 288.546C1220.17 285.481 1215.79 282.41 1211.1 279.763C1198.26 272.508 1185.01 265.787 1172.45 258.165C1163.05 252.454 1152.59 251.442 1141.88 250.177C1135.95 249.476 1130.19 247.604 1124.35 246.259C1124.46 245.612 1124.57 244.965 1124.68 244.317C1131.89 244.317 1139.1 244.317 1146.31 244.317C1146.42 243.898 1146.53 243.48 1146.64 243.061C1138.59 239.116 1130.45 235.303 1122.56 231.131C1120.62 230.108 1118.64 228.092 1118.12 226.222C1114.85 214.381 1107.55 204.742 1097.68 196.548C1095.96 195.118 1092.86 194.983 1090.41 194.222C1087.68 193.374 1084.96 192.494 1082.23 191.629C1082.29 190.859 1082.34 190.089 1082.4 189.32C1089.19 188.617 1095.97 187.915 1102.76 187.212C1103.02 186.638 1103.28 186.063 1103.53 185.489C1076.59 166.907 1045.1 155.074 1015.86 140.027C1022.69 139.284 1032 141.177 1035.08 131.39C1028.22 124.79 1020.22 117.018 1012.12 109.336C1004.2 101.831 996.036 94.523 988.29 86.8846C986.512 85.1308 986 82.3794 984.351 78.929C989.872 79.3594 993.514 79.6434 997.157 79.9275C997.622 79.5326 998.086 79.1379 998.55 78.7431C982.063 60.6794 966.472 42.1589 957.97 19.0086C954.995 13.6845 952.202 9.28185 949.933 4.88116C952.449 5.36675 954.44 5.85024 956.432 6.33376C956.432 6.33376 957.011 6.45183 957.503 6.85781C969.528 12.7816 981.061 18.2994 992.594 23.8173C993.135 23.9384 993.676 24.0595 994.814 24.6273C1000.66 27.7932 1005.9 30.5124 1011.15 33.2316C1011.79 33.5984 1012.42 33.9653 1013.75 34.7292C1022.04 38.2111 1029.64 41.2959 1037.23 44.3808C1037.23 44.3808 1037.22 44.3923 1037.47 44.7617C1039.9 46.2336 1042.09 47.3361 1044.29 48.4387C1044.93 49.1795 1045.58 49.9204 1046.82 51.0522C1047.82 51.7151 1048.23 51.987 1048.63 52.2589C1048.63 52.2589 1048.75 52.7581 1049.03 53.3885C1055.37 57.5797 1061.43 61.1405 1067.5 64.7013C1067.5 64.7013 1068.08 64.8256 1068.54 65.2459C1070.37 66.2552 1071.74 66.8442 1073.11 67.4332C1073.11 67.4332 1073.05 67.3963 1073.16 67.8428C1076.62 70.505 1079.97 72.7206 1083.32 74.9363C1083.5 75.3371 1083.8 75.6598 1084.68 76.4202C1087.35 78.4421 1089.55 79.9482 1091.89 81.8578C1095.86 84.4778 1099.67 86.6944 1103.49 88.911C1104.16 89.3324 1104.84 89.7537 1106.17 90.6102C1118.38 97.3531 1129.84 103.783 1141.5 109.924C1148.8 113.774 1156.41 117.19 1163.88 120.801C1163.88 120.801 1163.96 120.628 1164.06 121.105C1165.42 122.134 1166.7 122.686 1168.27 123.585C1170.88 125.007 1173.18 126.083 1175.8 127.489C1184.02 132.255 1191.91 136.691 1200.06 141.469C1201.61 142.44 1202.92 143.069 1204.31 143.599C1204.39 143.5 1204.21 143.697 1204.35 144.104C1210.82 150.913 1217.17 157.316 1223.52 164.09C1223.91 165.088 1224.3 165.715 1224.72 166.77C1226.15 169.028 1227.55 170.857 1229.12 173.091C1234.96 177.831 1240.63 182.167 1246.46 186.913C1254.17 192.212 1261.72 197.101 1269.34 202.423C1271.76 204.625 1274.12 206.395 1276.7 208.557C1280.59 210.914 1284.25 212.878 1287.91 214.842C1290 216.387 1292.09 217.931 1294.71 220.078C1297.66 222.425 1300.08 224.17 1302.5 225.915C1303.5 226.419 1304.5 226.923 1306.1 227.897C1308.12 229.337 1309.56 230.308 1310.99 231.278C1310.99 231.278 1311.05 231.229 1311.26 231.618C1314.59 233.441 1317.7 234.874 1321.1 236.656C1323.2 238.067 1325.02 239.13 1326.9 240.164C1326.97 240.135 1326.83 240.16 1327.02 240.553C1333.34 244.922 1339.48 248.898 1345.66 252.841C1345.71 252.808 1345.59 252.844 1345.8 253.223C1350.71 257.158 1355.4 260.715 1360.37 264.608C1365.3 269.355 1369.95 273.766 1374.81 278.487C1375.78 279.061 1376.53 279.325 1377.3 279.576C1377.32 279.562 1377.29 279.569 1377.42 279.859C1377.83 280.512 1378.22 280.736 1378.77 280.785C1378.83 280.75 1378.73 280.845 1378.86 281.133C1379.27 281.783 1379.65 282.007 1380.16 282.111C1380.18 282.129 1380.12 282.127 1380.16 282.492C1380.72 283.403 1381.23 283.948 1381.73 284.516C1381.72 284.538 1381.77 284.521 1382.01 284.92C1386.41 289.884 1389.81 291.912 1394 292C1396.03 292.872 1397.68 292.875 1399.5 294C1400.51 294.548 1403.64 297.828 1404.5 298.5C1405.98 299.922 1411.37 303.13 1413 304.5C1423.43 314.251 1427.19 311.625 1436.98 321.324C1440.13 324.439 1441.6 328.863 1443.95 332.973C1444.28 333.616 1444.59 333.893 1444.96 334.577C1444.54 337.668 1545.3 406.279 1544.93 408.881C1542.73 410.602 1918.04 741.922 1915.5 742.5C1905.15 744.855 1816.53 740.849 1806 742.5C1799.44 743.529 1750.15 739.934 1743.5 740C1721.42 740.22 1627.59 742.464 1605.5 742.5C1598.77 742.511 1300.3 416.886 1296.5 410.5C1291.44 401.986 1289.38 335.172 1281.43 328.429C1270.17 318.873 1259.03 311.633 1246.46 303.429C1239.88 299.132 1233.14 291.914 1225.15 288.546Z"
                fill="#17E3D7"
              />
              <path
                d="M932.433 2.36562C938.381 -3.24156 944.182 2.57145 949.933 4.92856C953.164 9.55425 954.931 13.6476 957.784 18.5035C954.329 15.5627 950.199 12.5121 947.452 8.68909C943.895 3.73787 938.984 2.44379 932.433 2.36562Z"
                fill="#17E3D7"
              />
            </svg>
          </div>
          <div className={`Mountains1 ${isTransition[1] ? `Transition` : ``}`}>
            <svg
              width="1921"
              height="483"
              viewBox="0 0 1921 483"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M526.22 172.114C520.711 175.889 540.906 210.34 535.299 214C532.085 216.098 623.584 468.373 619.799 470.5C616.715 470.373 601.161 472.929 598.799 472C588.613 467.995 578.861 476.246 568.799 472C566.894 471.196 456.845 174.131 454.257 172.748C450.237 168.464 447.187 164.467 443.625 160.864C440.38 157.581 436.86 154.405 432.957 151.759C427.221 147.87 421.037 144.494 415.043 140.9C415.194 140.326 415.346 139.751 415.497 139.176C417.86 138.629 420.221 137.626 422.585 137.62C429.32 137.602 430.58 134.716 428.235 129.874C425.399 124.02 422.315 118.259 419.389 112.557C423.573 111.971 427.518 111.42 431.463 110.868C427.068 106.395 422.663 103.545 418.098 100.908C404.284 92.9251 391.961 84.2552 394.703 67.2551C395.222 64.0416 393.053 59.7273 394.778 57.5703C400.26 50.7158 397.812 45.3463 396.299 38C395.758 36.5141 396.744 38.8992 396.299 37.5C396.465 36.7213 396.179 37.4401 396.299 37C396.824 36.9442 397.276 34.1301 398.299 34.5C403.795 45.7179 411.502 50.5535 420.802 58.7309C431.896 68.4861 440.96 80.076 450.516 91.1318C455.225 96.5801 460.514 100.746 468.389 101.832C468.389 101.832 468.91 101.987 469.398 102.298C470.282 102.896 470.679 103.183 471.075 103.469C471.376 104.091 471.676 104.713 472.415 105.944C477.609 111.77 482.365 116.987 487.122 122.203C487.205 123.151 487.288 124.099 487.37 125.998C489.725 139.025 496.104 149.386 505.061 158.565C506.126 159.655 508.335 159.878 510.013 160.503C510.013 160.503 509.985 160.51 510.087 160.938C515.533 164.949 520.877 168.531 526.22 172.114Z"
                fill="#17E3D7"
              />
              <path
                d="M321.301 104.787C325.908 100.776 329.682 97.2812 335 93.5C339.67 91.4119 341 90.5 345.762 85.1814C345.93 84.8048 346.337 83.8749 347.5 83.5C348.941 82.5187 348.829 82.3153 349.5 81.5C349.5 81.5 350.311 79.9501 351 79.5C353.311 75.4501 358.586 72.1014 360.5 71C360.5 71 362.181 69.8193 362.5 69.5C364 68 365.807 65.7898 367.472 63.725C368 63 367.828 63.0253 368.786 62.4739C369.686 61.8227 369.757 61.8994 370 61.5C370 61.5 370.325 61.2209 370.604 61.0516C371.156 60.5366 370.727 60.8458 371 60.5C371.273 60.1542 372.191 59.8087 372.5 59.5C374 58 377.076 53.4554 379.5 50C379.5 50 380.464 49.0296 381 49C386.635 44.8912 391.256 41.2161 396.341 37.0705C397.805 43.9915 400.262 50.7158 394.779 57.5703C393.054 59.7273 395.223 64.0416 394.705 67.2551C391.963 84.2552 404.286 92.9252 418.1 100.908C422.664 103.545 427.07 106.395 431.465 110.868C427.52 111.42 423.575 111.971 419.391 112.557C422.316 118.259 425.401 124.02 428.236 129.874C430.582 134.716 429.321 137.602 422.587 137.62C420.223 137.626 417.862 138.629 415.499 139.176C415.348 139.751 415.196 140.326 415.045 140.9C421.038 144.494 427.223 147.87 432.959 151.759C436.862 154.405 440.382 157.581 443.627 160.864C447.189 164.467 451.689 168.847 454.3 172.5C456.334 175.347 460.731 186.416 469.8 209.5C500.383 287.347 570.596 459.084 564.8 458C546.404 454.56 386.917 474.377 368.8 470C362.531 468.486 351.538 474.329 347.3 470C335.94 458.399 235.866 482.198 225.3 470C223.187 467.561 323.224 107.858 321.301 104.787Z"
                fill="#28B1A9"
              />
              <path
                d="M115.799 472.5C80.2993 468 95.7651 475.709 93.7993 477C81.7683 484.904 85.5764 471.891 73.2993 479.5C56.2993 486.5 48.9716 479.257 46.7993 479.5C38.5406 476.372 28.435 482.711 21.2993 479.5C12.476 475.53 9.05656 483.584 0.299317 479.5C0.299315 449.826 0.299319 58.2691 0.299317 28C11.633 28.8353 23.3861 29.122 34.1233 32.18C39.4789 33.7054 42.976 40.301 47.8651 45.2519C60.7298 54.9883 62.0322 58.4092 71.7993 66C76.2088 69.427 78.9959 70.9406 83.2993 74.5C84.6865 75.6474 85.766 76.0259 86.7993 77.5C87.6529 78.7177 87.6907 79.6432 88.2993 81C89.1002 82.7855 90.4504 85.5258 90.4504 85.5258C90.4504 85.5258 103.487 104.692 101.799 109.5C100.799 110 134.299 477 136.799 477C139.299 477 129.799 472.5 125.299 477C125.299 477 121.733 472.11 121.799 472.5C121.299 473 116.233 472.555 115.799 472.5Z"
                fill="#61E2DB"
              />
              <path
                d="M1459.53 474C1459.35 471.367 1426.5 477.375 1426.81 474C1426.53 472.866 1420.92 477.032 1411.31 474C1409.07 470.175 1358.45 477.115 1355.31 474C1345.51 464.301 1329.75 484.199 1319.31 474C1317.6 472.208 1302.23 472.487 1300.8 471.5C1284.3 471.5 1290.81 475.052 1289.8 474C1289.53 469.277 1435.79 53.3873 1435.8 53C1435.81 52.6127 1436.78 52.048 1436.78 52.048C1436.78 52.048 1440.64 47.1106 1442.81 44.5521C1444.87 41.5212 1446.42 38.5972 1448.4 35.4369C1450.46 31.5432 1452.09 27.886 1454.16 24C1456.07 20.694 1456.9 18.2127 1458.3 15C1458.3 15 1458.8 14 1459.53 13.7778C1460.16 12.3399 1460.09 11.6777 1460.8 10.5C1460.91 10.3129 1460.8 10.5 1461.1 10.0287C1461.4 9.55749 1462.69 8.38274 1463.32 7.14472C1463.9 5.32817 1463.69 3.98206 1464.88 2.46916C1467.31 -0.608526 1474.8 1 1474.8 1C1474.8 1 1476.86 1.51701 1477.8 2.5C1485.48 12.1405 1485.85 12.7895 1484.55 20.7847C1485.95 21.4625 1487.54 22.0098 1488.82 22.8971C1495.19 27.2881 1494.94 31.23 1488.4 35.2537C1486.63 36.3466 1485.38 38.1043 1482.73 40.6794C1495.15 42.5223 1503.85 47.3295 1509.83 55.4317C1514.16 61.3075 1522.36 66.0522 1521.05 73.758C1519.93 80.2941 1523.63 82.3371 1528.61 84.4945C1533.33 86.5408 1539.53 88.5506 1544.31 90.5C1560.23 97 1914.31 437.874 1896.31 474C1892.02 477.441 1592.57 472.575 1586.31 474C1576.26 476.288 1553.31 474 1500.31 474C1497.92 474.823 1462.48 473.254 1459.53 474Z"
                fill="#28B1A9"
              />
              <path
                d="M1543.37 90.1669C1538.14 88.4141 1533.33 86.5409 1528.6 84.4945C1523.63 82.3371 1519.92 80.2941 1521.04 73.7581C1522.35 66.0522 1514.15 61.3076 1509.82 55.4317C1503.84 47.3295 1495.14 42.5223 1482.72 40.6794C1485.37 38.1043 1486.62 36.3466 1488.39 35.2537C1494.93 31.2301 1495.18 27.2881 1488.81 22.8971C1487.53 22.0099 1485.94 21.4626 1484.54 20.7848C1485.84 12.7896 1484.97 12.1585 1477.8 2.5C1480.4 2.84022 1483.41 4.26253 1485.56 5.0537C1489.87 7.26625 1494.17 9.51367 1498.51 11.6852C1514.99 19.9248 1528.66 30.7457 1539.84 44.3639C1544.21 49.6823 1551.07 53.4086 1557.13 58.5944C1558.43 60.2911 1559.41 61.2535 1560.38 62.216C1560.38 62.216 1560.37 62.286 1560.46 62.7173C1562.36 64.0818 1918.49 481.067 1920.3 482C1912.91 490.007 1549.3 88.5 1543.37 90.1669Z"
                fill="#17E3D7"
              />
            </svg>
          </div>
          <div className={`Grass ${isTransition[11] ? `Hidden` : ``}`}>
            <svg
              width="1920"
              height="100"
              viewBox="0 0 1920 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1920" height="150" fill="#06615B" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
