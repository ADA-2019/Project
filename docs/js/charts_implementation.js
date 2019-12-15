/**
 *    from products
 */
var ctx = document.getElementById('from_product_chart').getContext('2d');

var from_product_chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [  moment('2014-04-06', "YYYY-MM-DD"), moment('2014-04-26', "YYYY-MM-DD"),
               moment('2014-05-16', "YYYY-MM-DD"), moment('2014-05-24', "YYYY-MM-DD"), moment('2014-06-01', "YYYY-MM-DD"), moment('2014-08-03', "YYYY-MM-DD"),
               moment('2014-08-14', "YYYY-MM-DD"), moment('2014-08-27', "YYYY-MM-DD"), moment('2014-09-05', "YYYY-MM-DD"), moment('2014-09-22', "YYYY-MM-DD"),
               moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"), moment('2014-11-06', "YYYY-MM-DD"),
               moment('2014-11-07', "YYYY-MM-DD"), moment('2014-11-15', "YYYY-MM-DD"), moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"),
               moment('2014-12-06', "YYYY-MM-DD"), moment('2014-12-10', "YYYY-MM-DD"), moment('2014-12-15', "YYYY-MM-DD"), moment('2014-12-20', "YYYY-MM-DD"),
               moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-28', "YYYY-MM-DD"), moment('2014-12-30', "YYYY-MM-DD"),
               moment('2015-01-01', "YYYY-MM-DD"), moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-09', "YYYY-MM-DD"), moment('2015-01-15', "YYYY-MM-DD"),
               moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"), moment('2015-01-24', "YYYY-MM-DD"), moment('2015-01-26', "YYYY-MM-DD"),
               moment('2015-01-28', "YYYY-MM-DD"), moment('2015-02-01', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"), moment('2015-02-09', "YYYY-MM-DD"),
               moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-13', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"), moment('2015-02-17', "YYYY-MM-DD"),
               moment('2015-02-24', "YYYY-MM-DD"), moment('2015-02-26', "YYYY-MM-DD"), moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-03', "YYYY-MM-DD"),
               moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"), moment('2015-03-10', "YYYY-MM-DD"), moment('2015-03-13', "YYYY-MM-DD"),
               moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-19', "YYYY-MM-DD"), moment('2015-03-22', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"),
               moment('2015-03-30', "YYYY-MM-DD"), moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-03', "YYYY-MM-DD"), moment('2015-04-07', "YYYY-MM-DD"),
               moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"), moment('2015-04-25', "YYYY-MM-DD"), moment('2015-04-27', "YYYY-MM-DD"),
               moment('2015-05-04', "YYYY-MM-DD"), moment('2015-05-06', "YYYY-MM-DD"), moment('2015-05-10', "YYYY-MM-DD"), moment('2015-05-13', "YYYY-MM-DD"),
               moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-11', "YYYY-MM-DD"), moment('2015-06-15', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"),
               moment('2015-06-26', "YYYY-MM-DD"), moment('2015-06-30', "YYYY-MM-DD"), moment('2015-07-04', "YYYY-MM-DD"), moment('2015-07-07', "YYYY-MM-DD")],
    datasets: [{ 
        data: [1022., 1134., 1104., 1097., 1185., 1112., 1270., 1221., 1172.,
               1334., 1454., 1503., 1504., 1351., 1363., 1424., 1550., 1512.,
               1630., 1573., 1613., 1566., 1641., 1612., 1599., 1578., 1465.,
               1816., 1712., 1688., 1817., 1855., 1850., 1895., 1781., 1944.,
               2054., 2012., 2141., 1794., 2086., 2078., 1992., 2007., 1961.,
               1697., 2073., 1994., 1970., 1948., 1900., 1911., 2247., 2245.,
               2172., 2134., 2117., 2130., 2272., 2328., 2454., 2603., 2195.,
               2112., 2478., 2403., 2464., 2393., 2122., 2431., 2257., 2366.,
               2527., 2341.],
        label: "America",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: [0., 0., 1., 1., 1., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.,
               0., 1., 1., 1., 0., 1., 1., 1., 1., 1., 0., 0., 0., 0., 0., 0., 0.,
               0., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 0., 1., 1., 1., 1., 1.,
               1., 1., 1., 0., 0., 1., 1., 1., 0., 1., 1., 1., 1., 1., 1., 1., 1.,
               1., 1., 1., 1., 1., 1.],
        label: "Asia",
        borderColor: "#f1c40f",
        fill: false
      },
      { 
        data: [ 613.,  783.,  640.,  827.,  767.,  792.,  836.,  841.,  656.,
                939.,  944.,  971.,  960.,  785.,  884., 1066., 1005., 1009.,
                946.,  952.,  927.,  786.,  831.,  712.,  722.,  685.,  623.,
                743.,  763.,  862.,  844.,  906.,  995.,  985.,  981.,  900.,
                869.,  839.,  920.,  797.,  884.,  848.,  886.,  928.,  894.,
                822.,  921.,  916.,  937.,  876.,  825.,  831.,  898., 1019.,
                935.,  929.,  888.,  940., 1012., 1062., 1052., 1073., 1006.,
                987., 1120., 1055., 1084., 1162.,  808.,  960.,  989.,  944.,
               1041., 1036.],
        label: "Europe",
        borderColor: "#27ae60",
        fill: false
      },
      { 
        data: [124., 142., 204., 208., 271., 306., 360., 381., 328., 388., 607.,
               619., 659., 607., 512., 656., 691., 674., 633., 627., 644., 619.,
               627., 631., 556., 551., 495., 564., 563., 569., 588., 644., 596.,
               588., 642., 687., 705., 667., 729., 616., 744., 760., 725., 753.,
               808., 798., 809., 788., 785., 796., 823., 783., 907., 884., 769.,
               757., 841., 843., 880., 927., 874., 821., 891., 822., 914., 885.,
               805., 817., 685., 860., 850., 898., 880., 922.],
        label: "Oceania",
        borderColor: "#9b59b6",
        fill: false
      },
      { 
        data: [217., 210., 273., 289., 326., 307., 382., 363., 384., 402., 515.,
               506., 509., 456., 420., 514., 507., 487., 528., 537., 535., 513.,
               439., 381., 367., 365., 333., 445., 400., 454., 490., 440., 513.,
               511., 510., 471., 485., 521., 494., 463., 486., 516., 484., 475.,
               553., 481., 438., 449., 441., 456., 456., 516., 568., 604., 635.,
               640., 663., 725., 623., 674., 585., 565., 547., 473., 534., 569.,
               524., 553., 425., 530., 630., 645., 648., 616.],
        label: "Others",
        borderColor: "#95a5a6",
        fill: false
      },
      { 
        data: [1971., 2117., 2541., 2602., 2562., 3313., 3551., 3888., 3730.,
               4000., 4447., 4408., 4450., 4053., 4083., 3854., 3520., 3474.,
               3514., 3716., 3852., 3644., 3774., 3645., 3486., 3226., 3351.,
               4014., 3999., 3738., 4146., 4256., 4240., 4281., 4119., 4069.,
               4083., 4112., 4070., 3551., 4318., 4275., 3895., 4430., 4300.,
               4020., 4429., 4569., 4491., 4540., 4494., 3841., 4555., 5010.,
               4663., 4702., 5019., 5077., 5266., 5345., 4857., 4887., 4816.,
               4159., 4972., 5022., 5013., 5189., 4543., 5301., 4944., 5322.,
               5188., 5367.],
        label: "Worldwide",
        borderColor: "#c0392b",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of products sent to each continent per days'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {

      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});
/**
 *    to products
 */
var ctx = document.getElementById('to_product_chart').getContext('2d');

var from_product_chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [  moment('2014-04-06', "YYYY-MM-DD"), moment('2014-04-26', "YYYY-MM-DD"),
               moment('2014-05-16', "YYYY-MM-DD"), moment('2014-05-24', "YYYY-MM-DD"), moment('2014-06-01', "YYYY-MM-DD"), moment('2014-08-03', "YYYY-MM-DD"),
               moment('2014-08-14', "YYYY-MM-DD"), moment('2014-08-27', "YYYY-MM-DD"), moment('2014-09-05', "YYYY-MM-DD"), moment('2014-09-22', "YYYY-MM-DD"),
               moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"), moment('2014-11-06', "YYYY-MM-DD"),
               moment('2014-11-07', "YYYY-MM-DD"), moment('2014-11-15', "YYYY-MM-DD"), moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"),
               moment('2014-12-06', "YYYY-MM-DD"), moment('2014-12-10', "YYYY-MM-DD"), moment('2014-12-15', "YYYY-MM-DD"), moment('2014-12-20', "YYYY-MM-DD"),
               moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-28', "YYYY-MM-DD"), moment('2014-12-30', "YYYY-MM-DD"),
               moment('2015-01-01', "YYYY-MM-DD"), moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-09', "YYYY-MM-DD"), moment('2015-01-15', "YYYY-MM-DD"),
               moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"), moment('2015-01-24', "YYYY-MM-DD"), moment('2015-01-26', "YYYY-MM-DD"),
               moment('2015-01-28', "YYYY-MM-DD"), moment('2015-02-01', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"), moment('2015-02-09', "YYYY-MM-DD"),
               moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-13', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"), moment('2015-02-17', "YYYY-MM-DD"),
               moment('2015-02-24', "YYYY-MM-DD"), moment('2015-02-26', "YYYY-MM-DD"), moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-03', "YYYY-MM-DD"),
               moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"), moment('2015-03-10', "YYYY-MM-DD"), moment('2015-03-13', "YYYY-MM-DD"),
               moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-19', "YYYY-MM-DD"), moment('2015-03-22', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"),
               moment('2015-03-30', "YYYY-MM-DD"), moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-03', "YYYY-MM-DD"), moment('2015-04-07', "YYYY-MM-DD"),
               moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"), moment('2015-04-25', "YYYY-MM-DD"), moment('2015-04-27', "YYYY-MM-DD"),
               moment('2015-05-04', "YYYY-MM-DD"), moment('2015-05-06', "YYYY-MM-DD"), moment('2015-05-10', "YYYY-MM-DD"), moment('2015-05-13', "YYYY-MM-DD"),
               moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-11', "YYYY-MM-DD"), moment('2015-06-15', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"),
               moment('2015-06-26', "YYYY-MM-DD"), moment('2015-06-30', "YYYY-MM-DD"), moment('2015-07-04', "YYYY-MM-DD"), moment('2015-07-07', "YYYY-MM-DD")],
    datasets: [{ 
        data: [1555, 1645, 1642, 1657, 1817, 1854, 2136, 2100, 2099, 2316, 2484,
               2526, 2563, 2476, 2372, 2535, 2749, 2716, 2848, 2750, 2766, 2729,
               2792, 2700, 2522, 2507, 2403, 3044, 2934, 2873, 2932, 3048, 3118,
               3139, 2997, 3142, 3251, 3138, 3263, 2801, 3297, 3303, 3025, 3317,
               3269, 2822, 3484, 3366, 3310, 3248, 3163, 3147, 3542, 3640, 3518,
               3584, 3653, 3645, 3673, 3748, 3764, 3892, 3531, 3357, 3844, 3769,
               3804, 3737, 3223, 3745, 3411, 3762, 3904, 3712],
        label: "America",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: [ 402,  449,  474,  332,  181,  499,  420,  527,  534,  586,  639,
                625,  580,  508,  549,  556,  532,  527,  572,  562,  612,  570,
                622,  619,  542,  316,  439,  588,  622,  415,  637,  632,  625,
                622,  631,  627,  584,  605,  617,  433,  616,  554,  530,  569,
                563,  605,  607,  732,  754,  733,  810,  337,  788,  821,  720,
                826,  844,  871,  900,  921,  832,  839,  895,  676,  891,  895,
               1054, 1088, 1127, 1146, 1158, 1142, 1120, 1123],
        label: "Asia",
        borderColor: "#f1c40f",
        fill: false
      },
      { 
        data: [1573, 1803, 1764, 2052, 2321, 2479, 2791, 2751, 2372, 2938, 3325,
               3351, 3356, 2973, 2999, 3330, 2887, 2873, 2820, 3099, 3174, 2841,
               2926, 2694, 2812, 2778, 2643, 3049, 3006, 3172, 3393, 3425, 3495,
               3542, 3440, 3312, 3354, 3487, 3521, 3155, 3605, 3619, 3459, 3655,
               3590, 3332, 3499, 3546, 3486, 3533, 3393, 3351, 3601, 4009, 3780,
               3625, 3735, 3888, 4126, 4263, 3881, 3918, 3652, 3251, 3853, 3917,
               3803, 3970, 3117, 3843, 3794, 3910, 3944, 4065],
        label: "Europe",
        borderColor: "#27ae60",
        fill: false
      },
      { 
        data: [ 146,  187,  271,  283,  335,  373,  446,  476,  426,  492,  606,
                626,  644,  592,  539,  736,  760,  746,  698,  698,  729,  693,
                647,  648,  594,  614,  550,  634,  624,  636,  656,  717,  669,
                661,  715,  759,  770,  690,  756,  642,  773,  787,  754,  823,
                827,  808,  826,  798,  793,  805,  836,  807,  955,  958,  833,
                831,  915,  909,  950, 1001,  954,  913,  969,  893,  995,  955,
                885,  900,  776,  949,  918,  953,  935,  985],
        label: "Oceania",
        borderColor: "#9b59b6",
        fill: false
      },
      { 
        data: [215, 175, 221, 229,  83, 139, 158, 204, 198, 214, 274, 294, 318,
               292, 255, 242, 241, 238, 263, 246, 240, 245, 255, 250, 200, 136,
               179, 189, 179, 135, 183, 190, 189, 198, 160, 135, 134, 131,  90,
               108, 125, 118, 114, 118, 169, 160, 157, 170, 176, 188, 183, 160,
               186, 234, 229, 223, 224, 230, 234, 231, 221, 203, 222, 211, 227,
               202, 206, 233, 201, 239, 223, 255, 233, 258],
        label: "Others",
        borderColor: "#95a5a6",
        fill: false
      },
      { 
        data: [ 56, 127, 391, 471, 375, 486, 448, 636, 641, 517, 639, 585, 621,
               411, 548, 115, 104,  56,  51,  51,  51,  50,  71,  71,  61,  55,
                54,  78,  72,  80,  84,  89,  98,  98,  90,  97, 104, 101, 108,
                83, 103,  97, 101, 112,  99,  91,  98, 105, 106, 110, 114,  81,
               104, 101,  94,  73, 158, 173, 171, 172, 171, 185, 187, 166, 209,
               197, 139, 187, 140, 161, 167, 154, 149, 140],
        label: "Worldwide",
        borderColor: "#c0392b",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of products sent from each continent per days'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {

      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});

/**
 *    Products
 */
var ctx = document.getElementById('numberOfProducts_chart').getContext('2d');

var nbProductsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [moment("2014-01-01", "YYYY-MM-DD"),moment("2014-01-09", "YYYY-MM-DD"),moment("2014-01-16", "YYYY-MM-DD"),moment("2014-01-26", "YYYY-MM-DD"),moment("2014-02-02", "YYYY-MM-DD"),moment("2014-02-05", "YYYY-MM-DD"),moment("2014-02-23", "YYYY-MM-DD"),moment("2014-02-24", "YYYY-MM-DD"),moment("2014-02-28", "YYYY-MM-DD"),moment("2014-03-03", "YYYY-MM-DD"),moment("2014-03-06", "YYYY-MM-DD"),moment("2014-04-06", "YYYY-MM-DD"),moment("2014-08-27", "YYYY-MM-DD"),moment("2014-10-25", "YYYY-MM-DD"),moment("2014-10-29", "YYYY-MM-DD"),moment("2014-10-31", "YYYY-MM-DD"),moment("2014-11-01", "YYYY-MM-DD"),moment("2014-11-08", "YYYY-MM-DD"),moment("2014-11-10", "YYYY-MM-DD"),moment("2014-11-16", "YYYY-MM-DD"),moment("2014-11-18", "YYYY-MM-DD"),moment("2014-11-19", "YYYY-MM-DD"),moment("2014-11-22", "YYYY-MM-DD"),moment("2014-11-23", "YYYY-MM-DD"),moment("2014-11-25", "YYYY-MM-DD"),moment("2014-12-01", "YYYY-MM-DD"),moment("2014-12-03", "YYYY-MM-DD"),moment("2014-12-06", "YYYY-MM-DD"),moment("2014-12-15", "YYYY-MM-DD"),moment("2014-12-23", "YYYY-MM-DD"),moment("2014-12-24", "YYYY-MM-DD"),moment("2014-12-26", "YYYY-MM-DD"),moment("2014-12-28", "YYYY-MM-DD"),moment("2015-01-08", "YYYY-MM-DD"),moment("2015-01-16", "YYYY-MM-DD"),moment("2015-01-21", "YYYY-MM-DD"),moment("2015-01-24", "YYYY-MM-DD"),moment("2015-01-26", "YYYY-MM-DD"),moment("2015-01-29", "YYYY-MM-DD"),moment("2015-02-02", "YYYY-MM-DD"),moment("2015-02-03", "YYYY-MM-DD"),moment("2015-02-05", "YYYY-MM-DD"),moment("2015-02-11", "YYYY-MM-DD"),moment("2015-02-16", "YYYY-MM-DD"),moment("2015-02-26", "YYYY-MM-DD"),moment("2015-02-28", "YYYY-MM-DD"),moment("2015-03-05", "YYYY-MM-DD"),moment("2015-03-07", "YYYY-MM-DD"),moment("2015-03-10", "YYYY-MM-DD"),moment("2015-03-13", "YYYY-MM-DD"),moment("2015-03-15", "YYYY-MM-DD"),moment("2015-03-29", "YYYY-MM-DD"),moment("2015-03-30", "YYYY-MM-DD"),moment("2015-04-02", "YYYY-MM-DD"),moment("2015-04-10", "YYYY-MM-DD"),moment("2015-04-12", "YYYY-MM-DD"),moment("2015-04-13", "YYYY-MM-DD"),moment("2015-04-25", "YYYY-MM-DD"),moment("2015-06-04", "YYYY-MM-DD"),moment("2015-06-20", "YYYY-MM-DD"),moment("2015-06-30", "YYYY-MM-DD")],
    datasets: [{ 
        data: [ 1566,  1823,  2368,  2867,  3319,  3421,  6876,  6869,  7676,
                8258,  8423,  9697, 15814, 18278, 18379, 18539, 18676, 17412,
               17636, 18988, 19234, 18926, 18589, 18203, 18172, 18570, 18509,
               18989, 19343, 19038, 18093, 17849, 18143, 18471, 18690, 19345,
               19484, 19595, 18963, 19929, 20379, 20182, 20397, 20645, 20842,
               20899, 21361, 21318, 21600, 21613, 20884, 24324, 22330, 21529,
               25009, 25426, 26222, 24659, 25650, 26860, 26602],
        label: "Number Of Products",
        borderColor: "#3e95cd",
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of products listed on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {

      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});



function toggleText(button_id, zoom)  {
   var text = document.getElementById(button_id).firstChild;
   text.data = zoom ? "Zoom In" : "Zoom Out";
}

var nbProductsZoom = false
function nbProductsScale() {
  toggleText("nbProductsScale", nbProductsZoom);
  if (nbProductsZoom) {
    nbProductsChart.options.scales.xAxes[0].time.min = nbProductsChart.data.labels[0];
    nbProductsChart.options.scales.xAxes[0].time.max = nbProductsChart.data.labels[-1];
    nbProductsChart.options.scales.yAxes[0].ticks.max = 30000;
    nbProductsChart.options.scales.yAxes[0].ticks.min = 0;
    nbProductsChart.update();
    nbProductsZoom = false
  } else {
    nbProductsChart.options.scales.xAxes[0].time.min = moment('2014-10-01', "YYYY-MM-DD");
    nbProductsChart.options.scales.xAxes[0].time.max = moment('2014-12-01', "YYYY-MM-DD");
    nbProductsChart.options.scales.yAxes[0].ticks.max = 19500;
    nbProductsChart.options.scales.yAxes[0].ticks.min = 16500;

    nbProductsChart.update();
    nbProductsZoom = true
  }
}
nbProductsScale()

/**
 *    Price
 */
var ctx = document.getElementById('priceListing_chart').getContext('2d');

var priceChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [  moment('2014-01-09', "YYYY-MM-DD"), moment('2014-01-16', "YYYY-MM-DD"), moment('2014-01-26', "YYYY-MM-DD"), moment('2014-02-02', "YYYY-MM-DD"),
               moment('2014-02-05', "YYYY-MM-DD"), moment('2014-02-23', "YYYY-MM-DD"), moment('2014-02-24', "YYYY-MM-DD"), moment('2014-02-28', "YYYY-MM-DD"),
               moment('2014-03-03', "YYYY-MM-DD"), moment('2014-03-06', "YYYY-MM-DD"), moment('2014-04-06', "YYYY-MM-DD"), moment('2014-04-26', "YYYY-MM-DD"),
               moment('2014-05-16', "YYYY-MM-DD"), moment('2014-05-24', "YYYY-MM-DD"), moment('2014-06-01', "YYYY-MM-DD"), moment('2014-08-03', "YYYY-MM-DD"),
               moment('2014-08-14', "YYYY-MM-DD"), moment('2014-08-27', "YYYY-MM-DD"), moment('2014-09-05', "YYYY-MM-DD"), moment('2014-09-22', "YYYY-MM-DD"),
               moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"), moment('2014-11-06', "YYYY-MM-DD"),
               moment('2014-11-07', "YYYY-MM-DD"), moment('2014-11-15', "YYYY-MM-DD"), moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"),
               moment('2014-12-06', "YYYY-MM-DD"), moment('2014-12-10', "YYYY-MM-DD"), moment('2014-12-15', "YYYY-MM-DD"), moment('2014-12-20', "YYYY-MM-DD"),
               moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-28', "YYYY-MM-DD"), moment('2014-12-30', "YYYY-MM-DD"),
               moment('2015-01-01', "YYYY-MM-DD"), moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-09', "YYYY-MM-DD"), moment('2015-01-15', "YYYY-MM-DD"),
               moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"), moment('2015-01-24', "YYYY-MM-DD"), moment('2015-01-26', "YYYY-MM-DD"),
               moment('2015-01-28', "YYYY-MM-DD"), moment('2015-02-01', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"), moment('2015-02-09', "YYYY-MM-DD"),
               moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-13', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"), moment('2015-02-17', "YYYY-MM-DD"),
               moment('2015-02-24', "YYYY-MM-DD"), moment('2015-02-26', "YYYY-MM-DD"), moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-03', "YYYY-MM-DD"),
               moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"), moment('2015-03-10', "YYYY-MM-DD"), moment('2015-03-13', "YYYY-MM-DD"),
               moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-19', "YYYY-MM-DD"), moment('2015-03-22', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"),
               moment('2015-03-30', "YYYY-MM-DD"), moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-03', "YYYY-MM-DD"), moment('2015-04-07', "YYYY-MM-DD"),
               moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"), moment('2015-04-25', "YYYY-MM-DD"), moment('2015-04-27', "YYYY-MM-DD"),
               moment('2015-05-04', "YYYY-MM-DD"), moment('2015-05-06', "YYYY-MM-DD"), moment('2015-05-10', "YYYY-MM-DD"), moment('2015-05-13', "YYYY-MM-DD"),
               moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-11', "YYYY-MM-DD"), moment('2015-06-15', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"),
               moment('2015-06-26', "YYYY-MM-DD"), moment('2015-06-30', "YYYY-MM-DD"), moment('2015-07-04', "YYYY-MM-DD"), moment('2015-07-07', "YYYY-MM-DD")],
    datasets: [{ 
        data: [562.95224133, 575.84069082, 589.85097827,562.95224133, 
               575.84069082, 589.85097827,562.95224133, 575.84069082, 
               589.85097827, 583.01048821, 544.99797489, 551.08077355,
               562.95224133, 575.84069082, 589.85097827, 614.28113635,
               616.20594419, 635.21654313, 668.35342235, 699.10701777,
               715.17654487, 701.88410821, 692.5748183 , 688.24228493,
               683.77955969, 670.82576548, 668.0957036 , 655.40993344,
               633.33014444, 614.62518327, 609.02424752, 604.79960215,
               602.71098044, 597.5492873 , 596.75897752, 593.30833244,
               594.46551728, 593.6155897 , 593.5304755 , 593.27323491,
               594.71101477, 591.44116238, 589.00037686, 587.09147474,
               580.42078236, 577.33515759, 573.35614053, 571.03588786,
               569.3427755 , 564.16372219, 559.4205787 , 558.24710285,
               554.75175313, 553.75881088, 553.03698076, 551.41877086,
               551.52659137, 550.07091343, 547.62774905, 545.66777501,
               543.82166686, 542.65712707, 541.28819466, 539.15792399,
               537.68771107, 537.96945176, 536.13333011, 535.14314823,
               535.72023045, 536.07832032, 535.24566154, 536.06086178,
               535.46391004, 537.47067605, 538.16585679, 536.01084754,
               532.18179053, 528.11499942, 513.2632031 , 506.50381766,
               505.80236663, 499.88612868, 492.1201984 , 484.31627365],
        label: "Price(USD)",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: [841.47, 860.29, 853.68, 832.9 , 829.96, 606.47, 606.04, 579.7 ,
               562.56, 664.52, 463.4 , 461.7 , 447.39, 521.05, 623.69, 588.89,
               546.18, 512.19, 489.67, 399.1 , 358.61, 357.09, 345.01, 339.46,
               349.82, 399.65, 378.25, 381.72, 376.76, 352.2 , 351.36, 317.62,
               332.02, 334.39, 316.16, 312.72, 320.43, 294.14, 282.38, 176.9 ,
               209.07, 211.38, 232.7 , 254.08, 263.35, 216.87, 226.49, 223.39,
               219.73, 221.97, 234.82, 233.42, 239.  , 237.34, 253.52, 275.05,
               272.74, 272.29, 289.86, 294.12, 281.42, 255.88, 259.92, 252.74,
               242.88, 247.09, 253.07, 255.27, 243.69, 236.54, 231.24, 219.43,
               240.36, 236.25, 241.73, 241.4 , 225.77, 228.85, 233.42, 244.53,
               242.6 , 257.04, 256.49, 269.96],
        label: "Price(BTC)",
        borderColor: "#f1c40f",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Average price of products listed on Agora Market'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {

      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'bottom',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});

var priceZoom = false

function priceScale() {
  toggleText("priceScale", priceZoom);
  if (priceZoom) {
    priceChart.options.scales.xAxes[0].time.min = priceChart.data.labels[0];
    priceChart.options.scales.xAxes[0].time.max = priceChart.data.labels[-1];
    priceChart.options.scales.yAxes[0].ticks.max = 900;
    priceChart.options.scales.yAxes[0].ticks.min = 100;
    priceChart.update();
    priceZoom = false
  } else {
    priceChart.options.scales.xAxes[0].time.min = moment('2014-10-01', "YYYY-MM-DD");
    priceChart.options.scales.xAxes[0].time.max = moment('2014-12-01', "YYYY-MM-DD");
    priceChart.options.scales.yAxes[0].ticks.max = 750;
    priceChart.options.scales.yAxes[0].ticks.min = 200;

    priceChart.update();
    priceZoom = true
  }
}
//priceScale()

/**
 *    Mean number of products per vendor
 */
var ctx = document.getElementById('vendorsMeanListing_chart').getContext('2d');

var meanProductsChart = new Chart(ctx, {
  type: 'line',
  data: {
    
    labels: [moment("2014-01-01", "YYYY-MM-DD"),moment("2014-01-09", "YYYY-MM-DD"),moment("2014-01-16", "YYYY-MM-DD"),moment("2014-01-26", "YYYY-MM-DD"),moment("2014-02-02", "YYYY-MM-DD"),moment("2014-02-05", "YYYY-MM-DD"),moment("2014-02-23", "YYYY-MM-DD"),moment("2014-02-24", "YYYY-MM-DD"),moment("2014-02-28", "YYYY-MM-DD"),moment("2014-03-03", "YYYY-MM-DD"),moment("2014-03-06", "YYYY-MM-DD"),moment("2014-04-06", "YYYY-MM-DD"),moment("2014-08-27", "YYYY-MM-DD"),moment("2014-10-25", "YYYY-MM-DD"),moment("2014-10-29", "YYYY-MM-DD"),moment("2014-10-31", "YYYY-MM-DD"),moment("2014-11-01", "YYYY-MM-DD"),moment("2014-11-08", "YYYY-MM-DD"),moment("2014-11-10", "YYYY-MM-DD"),moment("2014-11-16", "YYYY-MM-DD"),moment("2014-11-18", "YYYY-MM-DD"),moment("2014-11-19", "YYYY-MM-DD"),moment("2014-11-22", "YYYY-MM-DD"),moment("2014-11-23", "YYYY-MM-DD"),moment("2014-11-25", "YYYY-MM-DD"),moment("2014-12-01", "YYYY-MM-DD"),moment("2014-12-03", "YYYY-MM-DD"),moment("2014-12-06", "YYYY-MM-DD"),moment("2014-12-15", "YYYY-MM-DD"),moment("2014-12-23", "YYYY-MM-DD"),moment("2014-12-24", "YYYY-MM-DD"),moment("2014-12-26", "YYYY-MM-DD"),moment("2014-12-28", "YYYY-MM-DD"),moment("2015-01-08", "YYYY-MM-DD"),moment("2015-01-16", "YYYY-MM-DD"),moment("2015-01-21", "YYYY-MM-DD"),moment("2015-01-24", "YYYY-MM-DD"),moment("2015-01-26", "YYYY-MM-DD"),moment("2015-01-29", "YYYY-MM-DD"),moment("2015-02-02", "YYYY-MM-DD"),moment("2015-02-03", "YYYY-MM-DD"),moment("2015-02-05", "YYYY-MM-DD"),moment("2015-02-11", "YYYY-MM-DD"),moment("2015-02-16", "YYYY-MM-DD"),moment("2015-02-26", "YYYY-MM-DD"),moment("2015-02-28", "YYYY-MM-DD"),moment("2015-03-05", "YYYY-MM-DD"),moment("2015-03-07", "YYYY-MM-DD"),moment("2015-03-10", "YYYY-MM-DD"),moment("2015-03-13", "YYYY-MM-DD"),moment("2015-03-15", "YYYY-MM-DD"),moment("2015-03-29", "YYYY-MM-DD"),moment("2015-03-30", "YYYY-MM-DD"),moment("2015-04-02", "YYYY-MM-DD"),moment("2015-04-10", "YYYY-MM-DD"),moment("2015-04-12", "YYYY-MM-DD"),moment("2015-04-13", "YYYY-MM-DD"),moment("2015-04-25", "YYYY-MM-DD"),moment("2015-06-04", "YYYY-MM-DD"),moment("2015-06-20", "YYYY-MM-DD"),moment("2015-06-30", "YYYY-MM-DD")],
    datasets: [{ 
        data: [11.125     , 11.40776699, 13.39655172, 13.53676471, 13.68125   ,
               13.30952381, 11.78658537, 11.86666667, 12.06878307, 12.04926108,
               11.8125    , 12.40740741, 17.19703104, 17.34863388, 17.14224599,
               17.19532909, 17.44633369, 18.43463303, 18.47520185, 19.76213018,
               19.9147929 , 19.54231228, 19.36231884, 19.57214555, 19.4931164 ,
               19.67790262, 19.31795511, 20.14030612, 20.31362468, 21.74498567,
               21.43198804, 22.02799378, 22.23088924, 21.20375723, 21.21044993,
               21.55587393, 21.57514451, 21.40401146, 20.88311688, 21.20893372,
               21.57939914, 21.70682148, 21.77138643, 22.68318318, 23.10939908,
               23.10138249, 23.60188088, 23.88309637, 23.70957614, 23.52283465,
               23.28217822, 23.82380216, 23.67005076, 22.96119929, 24.91162029,
               25.19124797, 25.39302694, 24.97094017, 26.33870968, 26.8994614 ,
               26.68959108],
        label: "Sellers who stayed",
        borderColor: "#e55039",
        fill: false
      },
      { 
        data: [10.04166667,  9.65079365,  9.82051282,  9.74747475,  9.25663717,
                9.33333333,  9.59922179,  9.70300752,  9.57337884, 10.07666667,
               10.05144695,  9.82334385,  8.74242424,  7.76649746,  7.80851064,
                7.46703297,  7.0960452 ,  3.5       , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0],
        label: "sellers who have retired",
        borderColor: "#38ada9",
        fill: false
      },
      { 
        data: [10.74264706, 10.74096386, 11.95876289, 11.94042553, 11.84981685,
               11.67719298, 10.82564103, 10.92471358, 10.97913562, 11.21104816,
               11.05914718, 11.38729763, 14.9761194 , 15.65107914, 15.57969724,
               15.62010676, 15.71453901, 17.63879957, 17.63578275, 18.36091003,
               18.4438723 , 18.13312693, 17.85935884, 17.9733191 , 17.84272051,
               18.30835118, 17.99051633, 18.4577167 , 18.93524416, 19.98864926,
               19.84934757, 20.20418204, 20.33536585, 19.03837719, 19.12091503,
               19.14074074, 19.14315789, 18.98336798, 18.74452555, 18.88061224,
               19.3244898 , 19.45764463, 19.50103306, 19.94264859, 19.97001034,
               20.07892004, 20.50052138, 20.70991561, 20.79810726, 20.68310598,
               20.62350381, 20.48832866, 20.31344793, 19.83991684, 21.03849765,
               21.08449396, 21.20144535, 21.40349176, 22.14327485, 21.81529851,
               21.08127854],
        label: "All sellers",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {

    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of products listed on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});

var meanProductsZoom = false
function meanProductsScale() {
  toggleText("meanProductsScale", meanProductsZoom);
  if (meanProductsZoom) {
    meanProductsChart.options.scales.xAxes[0].time.min = meanProductsChart.data.labels[0];
    meanProductsChart.options.scales.xAxes[0].time.max = meanProductsChart.data.labels[-1];
    meanProductsChart.options.scales.yAxes[0].ticks.max = 30;
    meanProductsChart.update();
    meanProductsZoom = false
  } else {
    meanProductsChart.options.scales.xAxes[0].time.min = moment('2014-10-01', "YYYY-MM-DD");
    meanProductsChart.options.scales.xAxes[0].time.max = moment('2015-02-21', "YYYY-MM-DD");
    meanProductsChart.options.scales.yAxes[0].ticks.min = 5;
    meanProductsChart.options.scales.yAxes[0].ticks.max = 24;

    meanProductsChart.update();
    meanProductsZoom = true
  }
}

/**
 *    Number Of New Vendors
 */
var ctx = document.getElementById('newVendors_chart').getContext('2d');

var newVendors_chart = new Chart(ctx, {
  type: 'line',
  data: {
    
    labels: [moment('2014-01-09', "YYYY-MM-DD"), moment('2014-01-16', "YYYY-MM-DD"), moment('2014-01-26', "YYYY-MM-DD"),
               moment('2014-02-02', "YYYY-MM-DD"), moment('2014-02-05', "YYYY-MM-DD"), moment('2014-02-23', "YYYY-MM-DD"), moment('2014-02-24', "YYYY-MM-DD"),
               moment('2014-02-28', "YYYY-MM-DD"), moment('2014-03-03', "YYYY-MM-DD"), moment('2014-03-06', "YYYY-MM-DD"), moment('2014-04-06', "YYYY-MM-DD"),
               moment('2014-08-27', "YYYY-MM-DD"), moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"),
               moment('2014-11-01', "YYYY-MM-DD"), moment('2014-11-08', "YYYY-MM-DD"), moment('2014-11-10', "YYYY-MM-DD"), moment('2014-11-16', "YYYY-MM-DD"),
               moment('2014-11-18', "YYYY-MM-DD"), moment('2014-11-19', "YYYY-MM-DD"), moment('2014-11-22', "YYYY-MM-DD"), moment('2014-11-23', "YYYY-MM-DD"),
               moment('2014-11-25', "YYYY-MM-DD"), moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"), moment('2014-12-06', "YYYY-MM-DD"),
               moment('2014-12-15', "YYYY-MM-DD"), moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-26', "YYYY-MM-DD"),
               moment('2014-12-28', "YYYY-MM-DD"), moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"),
               moment('2015-01-24', "YYYY-MM-DD"), moment('2015-01-26', "YYYY-MM-DD"), moment('2015-01-29', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"),
               moment('2015-02-03', "YYYY-MM-DD"), moment('2015-02-05', "YYYY-MM-DD"), moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"),
               moment('2015-02-26', "YYYY-MM-DD"), moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"),
               moment('2015-03-10', "YYYY-MM-DD"), moment('2015-03-13', "YYYY-MM-DD"), moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"),
               moment('2015-03-30', "YYYY-MM-DD"), moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"),
               moment('2015-04-13', "YYYY-MM-DD"), moment('2015-04-25', "YYYY-MM-DD"), moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"),
               moment('2015-06-30', "YYYY-MM-DD")],
    datasets: [{ 
        data: [70.38888889,  4.76388889,  4.55681818,  5.18181818,
        5.125     , 10.33552632, 17.71052632, 17.3       , 14.05      ,
       11.375     ,  7.84375   ,  4.32638889,  3.52430556,  4.71666667,
        5.13333333,  5.33333333,  6.4375    ,  6.4375    ,  7.35714286,
        5.69047619,  5.58333333,  6.        ,  2.75      ,  1.66666667,
        1.30952381,  3.14285714,  5.5       ,  4.4       ,  3.01111111,
        2.61111111,  1.66666667,  2.16666667,  3.625     ,  3.79166667,
        3.25      ,  4.95833333,  4.70833333,  2.95833333,  4.325     ,
        2.95      ,  0.91666667,  1.80952381,  3.05952381,  3.96212121,
        3.87878788,  3.25      ,  3.25      ,  2.70833333,  2.5       ,
        2.625     ,  5.06666667,  4.31666667,  1.        ,  4.75      ,
        6.16666667,  5.91666667,  4.48076923,  2.1575985 ,  4.13271162,
        6.70588235],
        label: "Number Of Suppliers",
        borderColor: "#3e95cd",
        fill: true
      }
    ]
  },
  options: {
    responsive: true,

    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of new suppliers with at least one product listed on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }
      }]
    },
    plugins: {
      zoom: {
        zoom: {
          enabled: false,
          mode: 'x',
          sensitivity: 3
        }
      }
    }
  }
});
var newVendorZoom = false
function newVendorScale() {
  toggleText("newVendorScale", newVendorZoom);
  if (newVendorZoom) {
    newVendors_chart.options.scales.xAxes[0].time.min = newVendors_chart.data.labels[0];
    newVendors_chart.options.scales.xAxes[0].time.max = newVendors_chart.data.labels[-1];
    newVendors_chart.options.scales.yAxes[0].ticks.max = 80;
    newVendors_chart.update();
    newVendorZoom = false
  } else {
    newVendors_chart.options.scales.xAxes[0].time.min = moment('2014-10-01', "YYYY-MM-DD");
    newVendors_chart.options.scales.xAxes[0].time.max = moment('2015-02-21', "YYYY-MM-DD");
    newVendors_chart.options.scales.yAxes[0].ticks.max = 10;

    newVendors_chart.update();
    newVendorZoom = true
  }
}


/* DONUT Vendors*/
let dados = {
    datasets: [{
        // cria-se um vetor data, com os valores a ser dispostos no gráfico
        data: [367, 99, 525],
        // cria-se uma propriedade para adicionar cores aos respectivos valores do vetor data
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)']
    }],
    // cria-se legendas para os respectivos valores do vetor data
    labels: ['Only Shop on Agora', 'Shops on Agora and Busted Market', 'Shops on Agora and Surviving Market']
};

let dado = {
    datasets: [{
        // cria-se um vetor data, com os valores a ser dispostos no gráfico
        data: [584, 104, 163],
        // cria-se uma propriedade para adicionar cores aos respectivos valores do vetor data
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)']
    }],
    // cria-se legendas para os respectivos valores do vetor data
    labels: ['Only Shop on Agora', 'Shops on Agora and Busted Market', 'Shops on Agora and Surviving Market']
};

let opcoes = {
    cutoutPercentage: 40,
};

var ctx = document.getElementById('donutAfter_chart').getContext('2d');

let meuDonutAfterChart = new Chart(ctx, {
    type: 'doughnut',
    data: dados,
    options: opcoes
});

var ctx = document.getElementById('donutBefore_chart').getContext('2d');

let meuDonutBeforeChart = new Chart(ctx, {
    type: 'doughnut',
    data: dado,
    options: opcoes
});

/**
 *    Vendors
 */
var ctx = document.getElementById('numberOfActiveVendors_chart').getContext('2d');

var activeVendorChart = new Chart(ctx, {
  type: 'line',
  data: {
    responsive:true,
    labels: [moment('2014-01-09', "YYYY-MM-DD"), moment('2014-01-16', "YYYY-MM-DD"), moment('2014-01-26', "YYYY-MM-DD"), moment('2014-02-02', "YYYY-MM-DD"),
               moment('2014-02-05', "YYYY-MM-DD"), moment('2014-02-23', "YYYY-MM-DD"), moment('2014-02-24', "YYYY-MM-DD"), moment('2014-02-28', "YYYY-MM-DD"),
               moment('2014-03-03', "YYYY-MM-DD"), moment('2014-03-06', "YYYY-MM-DD"), moment('2014-04-06', "YYYY-MM-DD"), moment('2014-08-27', "YYYY-MM-DD"),
               moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"), moment('2014-11-01', "YYYY-MM-DD"),
               moment('2014-11-08', "YYYY-MM-DD"), moment('2014-11-10', "YYYY-MM-DD"), moment('2014-11-16', "YYYY-MM-DD"), moment('2014-11-18', "YYYY-MM-DD"),
               moment('2014-11-19', "YYYY-MM-DD"), moment('2014-11-22', "YYYY-MM-DD"), moment('2014-11-23', "YYYY-MM-DD"), moment('2014-11-25', "YYYY-MM-DD"),
               moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"), moment('2014-12-06', "YYYY-MM-DD"), moment('2014-12-15', "YYYY-MM-DD"),
               moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-26', "YYYY-MM-DD"), moment('2014-12-28', "YYYY-MM-DD"),
               moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"), moment('2015-01-24', "YYYY-MM-DD"),
               moment('2015-01-26', "YYYY-MM-DD"), moment('2015-01-29', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"), moment('2015-02-03', "YYYY-MM-DD"),
               moment('2015-02-05', "YYYY-MM-DD"), moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"), moment('2015-02-26', "YYYY-MM-DD"),
               moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"), moment('2015-03-10', "YYYY-MM-DD"),
               moment('2015-03-13', "YYYY-MM-DD"), moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"), moment('2015-03-30', "YYYY-MM-DD"),
               moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"), moment('2015-04-13', "YYYY-MM-DD"),
               moment('2015-04-25', "YYYY-MM-DD"), moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"), moment('2015-06-30', "YYYY-MM-DD")],
    datasets: [{ 
        data: [ 166,  194,  235,  273,  285,  585,  611,  671,  706,  727,  803,
               1005, 1111, 1123, 1124, 1127,  933,  939,  967,  971,  969,  967,
                937,  941,  933,  949,  946,  942,  881,  843,  813,  820,  912,
                918,  945,  950,  962,  959,  980,  980,  968,  968,  959,  967,
                963,  959,  948,  951,  953,  919, 1071,  989,  962, 1065, 1077,
               1107, 1031, 1026, 1071, 1095],
        label: "Number Of Active Vendors",
        borderColor: "#3e95cd",
        fill: true
      }
    ]
  },
  options: {

    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number Of Active Vendors on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
            
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'bottom',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});

var activeVendorZoom = false
function activeVendorScale() {
  toggleText("activeVendorScale", activeVendorZoom);
  if (activeVendorZoom) {
    activeVendorChart.options.scales.xAxes[0].time.min = activeVendorChart.data.labels[0];
    activeVendorChart.options.scales.xAxes[0].time.max = activeVendorChart.data.labels[-1];
    activeVendorChart.options.scales.yAxes[0].ticks.min = 0;

    activeVendorChart.update();
    activeVendorZoom = false
  } else {
    activeVendorChart.options.scales.xAxes[0].time.min = moment('2014-08-20', "YYYY-MM-DD");
    activeVendorChart.options.scales.xAxes[0].time.max = moment('2015-01-16', "YYYY-MM-DD");
    activeVendorChart.options.scales.yAxes[0].ticks.min = 600;

    activeVendorChart.update();
    activeVendorZoom = true
  }
}
activeVendorScale()

/**
 *    Categories
 */
var ctx = document.getElementById('categories_chart').getContext('2d');

var categoriesChart = new Chart(ctx, {
  type: 'line',
  data: {
    responsive:true,
    labels: [moment('2014-01-01', "YYYY-MM-DD"), moment('2014-01-09', "YYYY-MM-DD"), moment('2014-01-16', "YYYY-MM-DD"), moment('2014-01-26', "YYYY-MM-DD"), moment('2014-02-02', "YYYY-MM-DD"),
               moment('2014-02-05', "YYYY-MM-DD"), moment('2014-02-23', "YYYY-MM-DD"), moment('2014-02-24', "YYYY-MM-DD"), moment('2014-02-28', "YYYY-MM-DD"),
               moment('2014-03-03', "YYYY-MM-DD"), moment('2014-03-06', "YYYY-MM-DD"), moment('2014-04-06', "YYYY-MM-DD"), moment('2014-08-27', "YYYY-MM-DD"),
               moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"), moment('2014-11-01', "YYYY-MM-DD"),
               moment('2014-11-08', "YYYY-MM-DD"), moment('2014-11-10', "YYYY-MM-DD"), moment('2014-11-16', "YYYY-MM-DD"), moment('2014-11-18', "YYYY-MM-DD"),
               moment('2014-11-19', "YYYY-MM-DD"), moment('2014-11-22', "YYYY-MM-DD"), moment('2014-11-23', "YYYY-MM-DD"), moment('2014-11-25', "YYYY-MM-DD"),
               moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"), moment('2014-12-06', "YYYY-MM-DD"), moment('2014-12-15', "YYYY-MM-DD"),
               moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-26', "YYYY-MM-DD"), moment('2014-12-28', "YYYY-MM-DD"),
               moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"), moment('2015-01-24', "YYYY-MM-DD"),
               moment('2015-01-26', "YYYY-MM-DD"), moment('2015-01-29', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"), moment('2015-02-03', "YYYY-MM-DD"),
               moment('2015-02-05', "YYYY-MM-DD"), moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"), moment('2015-02-26', "YYYY-MM-DD"),
               moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"), moment('2015-03-10', "YYYY-MM-DD"),
               moment('2015-03-13', "YYYY-MM-DD"), moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"), moment('2015-03-30', "YYYY-MM-DD"),
               moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"), moment('2015-04-13', "YYYY-MM-DD"),
               moment('2015-04-25', "YYYY-MM-DD"), moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"), moment('2015-06-30', "YYYY-MM-DD")],
    datasets: [
      {
        data: [ 1160.,  1332.,  1691.,  2043.,  2299.,  2372.,  5378.,  5316.,
                5876.,  6420.,  6551.,  7533., 11831., 13876., 13873., 14135.,
               14136., 12994., 13254., 13527., 13585., 13192., 12900., 12345.,
               12331., 12692., 12729., 12908., 13293., 12936., 12200., 11865.,
               11986., 13271., 13513., 13925., 13975., 14133., 13904., 14229.,
               14339., 14450., 14663., 14540., 14909., 14667., 15168., 15023.,
               14832., 14832., 13854., 16264., 15299., 14838., 16494., 16999.,
               17499., 15883., 16771., 17008., 16705.],

        label: "Drugs",
        borderColor: "#6c5ce7",
        backgroundColor: "#6c5ce7",
        fill: 'origin'
      },
      { 
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0,  1.,  3.,  3., 18., 22., 18.,
               16., 16., 30., 29., 30., 32., 11., 56., 53.],
        label: "Chemicals",
        borderColor: "#d63031",
        backgroundColor: "#d63031",
        fill: '-1'
      },
      {
        data: [  31.,   40.,   45.,   68.,  118.,  122.,  173.,  170.,  169.,
                150.,  152.,  197.,  641.,  697.,  692.,  695.,  698.,  591.,
                591.,  693.,  727.,  723.,  769.,  768.,  762.,  758.,  759.,
                831.,  838.,  843.,  823.,  789.,  825.,  890.,  882.,  915.,
                910.,  880.,  763.,  735.,  855.,  830.,  878.,  890.,  803.,
                797.,  919.,  924.,  952.,  936.,  969., 1022.,  936.,  908.,
               1054., 1059., 1073., 1044., 1076., 1144., 1190.],

        label: "Counterfeits",
        borderColor: "#fdcb6e",
        backgroundColor: "#fdcb6e",
        fill: '-2'
      },
      {
        data: [  42.,   47.,   52.,   76.,   60.,   68.,  174.,  187.,  210.,
                257.,  251.,  300.,  430.,  496.,  502.,  415.,  519.,  522.,
                528.,  570.,  687.,  724.,  587.,  737.,  686.,  711.,  562.,
                745.,  734.,  768.,  763.,  765.,  798.,  622.,  588.,  627.,
                626.,  623.,  514.,  660.,  661.,  662.,  631.,  671.,  676.,
                680.,  693.,  669.,  815.,  864.,  882., 1040.,  948.,  950.,
               1078., 1066., 1113., 1223., 1270., 1332., 1292.],

        label: "Data",
        borderColor: "#636e72",
        backgroundColor: "#636e72",
        fill: '-3'
      },
      {
        data: [  4.,   4.,   8.,  11.,  11.,   8.,   6.,   5.,  12.,  16.,  20.,
                21., 119., 152., 158., 165., 160., 171., 173., 168., 166., 168.,
               187., 186., 194., 180., 205., 209., 216., 245., 240., 254., 258.,
               270., 273., 275., 279., 223., 284., 285., 285., 283., 241., 272.,
               281., 277., 286., 286., 291., 291., 295., 332., 331., 324., 344.,
               350., 352., 359., 389., 426., 465.],

        label: "Drugs Paraphernalia",
        borderColor: "#fd79a8",
        backgroundColor: "#fd79a8",
        fill: '-4'
      },
      
      {
        data: [ 0,  0,  0,  0,  0,  0,  11.,  19.,  65.,  57.,  76.,
                68.,  80., 147., 153., 156., 160., 158., 158., 161., 158., 159.,
               163., 169., 179., 154., 186., 166., 131., 130., 130., 130., 122.,
               141., 133., 135., 132., 135., 107., 135., 135., 140., 131., 129.,
               146., 148., 143., 147., 145.,  90., 157., 170., 152., 120., 167.,
               167., 170., 174., 170., 204., 207.],

        label: "Electronics",
        borderColor: "#2d3436",
        backgroundColor: "#2d3436",
        fill: '-5'
      },
      {
        data: [ 20.,  28.,  40.,  51.,  53.,  58., 115., 114., 137., 147., 149.,
               162., 245., 276., 281., 254., 283., 307., 282., 306., 323., 327.,
               328., 324., 332., 342., 344., 370., 366., 364., 363., 363., 377.,
               346., 353., 357., 380., 398., 422., 445., 446., 436., 398., 368.,
               401., 401., 369., 371., 425., 427., 402., 439., 412., 382., 428.,
               420., 424., 441., 358., 355., 355.],

        label: "Forgeries",
        borderColor: "#55efc4",
        backgroundColor: "#55efc4",
        fill: '-6'
      },
      {
        data: [ 241.,  276.,  452.,  465.,  576.,  576.,  662.,  677.,  746.,
                721.,  724.,  838., 1294., 1486., 1561., 1550., 1537., 1526.,
               1578., 1957., 1960., 1993., 1975., 1999., 2001., 1998., 1974.,
               2002., 2006., 2003., 1912., 1956., 2030., 1766., 1756., 1874.,
               1919., 1945., 1744., 2145., 2362., 2361., 2395., 2471., 2606.,
               2611., 2484., 2573., 2742., 2886., 2997., 3444., 2679., 2687.,
               3766., 3724., 3805., 3776., 3707., 4217., 4082.],

        label: "Information",
        borderColor: "#74b9ff",
        backgroundColor: "#74b9ff",
        fill: '-7'
      },
      {
        data: [  2.,   2.,  0,  0,  0,  0,   2.,  13.,   6.,   6.,  13.,
                12., 133., 122., 122., 126., 126., 126.,  30., 123., 123., 123.,
               131., 130., 135., 136., 136., 136., 135., 129., 129., 130., 132.,
               128., 129., 133., 133., 120., 131., 130., 130., 130., 130., 131.,
               133., 133., 130., 130., 133.,  60.,  0, 122., 121., 122., 152.,
               152., 157., 156., 226., 272., 287.],

        label: "Jewelry",
        borderColor: "#dfe6e9",
        backgroundColor: "#dfe6e9",
        fill: '-8'
      },
      {
        data: [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
                14., 151., 157., 148., 151., 147., 163., 191., 389., 422., 433.,
               446., 446., 443., 453., 471., 477., 481., 480., 441., 473., 475.,
               243., 254., 262., 270., 280., 237., 300., 300.,  30., 304., 321.,
               329., 298., 331., 327., 341., 355., 354., 371., 364., 354., 406.,
               403., 406., 384., 434., 519., 614.],

        label: "Other",
        borderColor: "#e58e26",
        backgroundColor: "#e58e26",
        fill: '-9'
      },
      {
        data: [  51.,   78.,   58.,  121.,  131.,  129.,  226.,  236.,  309.,
                343.,  346.,  369.,  508.,  520.,  527.,  529.,  543.,  496.,
                490.,  736.,  724.,  723.,  723.,  724.,  743.,  774.,  781.,
                768.,  764.,  761.,  728.,  759.,  766.,  427.,  437.,  470.,
                483.,  482.,  478.,  484.,  485.,  479.,  476.,  472.,  167.,
                499.,  473.,  478.,  525.,  460.,  603.,  761.,  751.,  609.,
                773.,  738.,  872.,  878.,  973., 1016., 1010.],

        label: "Services",
        borderColor: "#8e44ad",
        backgroundColor: "#8e44ad",
        fill: '-10'
      },
      {
        data: [ 0,  0,   1.,  0,  44.,  44.,  44.,  44.,  47.,  47.,  47.,
                65., 247., 241., 251., 254., 254., 253., 253., 255., 255., 254.,
               256., 255., 256., 258., 261., 260., 259., 266., 258., 259., 259.,
               256., 258., 256., 253., 253., 254., 255., 255., 254.,  34., 260.,
               267., 267., 245., 267., 267., 268., 208., 210., 207., 105., 208.,
               209., 209., 200., 169., 204., 263.],

        label: "Tobacco",
        borderColor: "#c0392b",
        backgroundColor: "#c0392b",
        fill: '-11'
      },
      {
        data: [ 15.,  16.,  21.,  32.,  27.,  44.,  85.,  88.,  99.,  94.,  94.,
               118., 135., 108., 111., 109., 113., 105., 108., 103., 104., 107.,
               124., 120., 110., 114., 101., 117., 120., 113., 106., 106., 115.,
               111., 114., 116., 124., 123., 125., 126., 126., 127., 116., 120.,
               124., 121., 119., 120., 129., 126., 141., 131., 114., 114., 109.,
               110., 112., 109.,  96., 107.,  79.],

        label: "Weapons",
        borderColor: "#2c3e50",
        backgroundColor: "#2c3e50",
        fill: '-12'
      }
    ]
  },
  options: {
    
    maintainAspectRatio: false,
    elements: {
        point:{
            radius: 0
        }
    },
    title: {
      display: true,
      text: 'Number Of Active Vendors on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
            
        }],
        yAxes: [{
          stacked: true,
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'bottom',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    },
    filler: {
        propagate: true
    }
  }
});

var categoriesZoom = false
function categoriesScale() {
  toggleText("categoriesScale", categoriesZoom);
  if (categoriesZoom) {
    categoriesChart.options.scales.xAxes[0].time.min = categoriesChart.data.labels[0];
    categoriesChart.options.scales.xAxes[0].time.max = categoriesChart.data.labels[-1];
    categoriesChart.options.scales.yAxes[0].ticks.min = 0;
    categoriesChart.options.scales.yAxes[0].ticks.max = 30000;

    categoriesChart.update();
    categoriesZoom = false
  } else {
    categoriesChart.options.scales.xAxes[0].time.min = moment('2014-08-20', "YYYY-MM-DD");
    categoriesChart.options.scales.xAxes[0].time.max = moment('2015-01-16', "YYYY-MM-DD");
    categoriesChart.options.scales.yAxes[0].ticks.min = 10000;
    categoriesChart.options.scales.yAxes[0].ticks.max = 20000;

    categoriesChart.update();
    categoriesZoom = true
  }
}

categoriesScale()


/* CHORD DIAGRAM*/
var margin = {left:20, top:20, right:290, bottom:300},
    width =  Math.min(window.innerWidth, 1000) - margin.left - margin.right, // more flexibility: Math.min(window.innerWidth, 1000)
    height =  Math.min(window.innerWidth, 1000) - margin.top - margin.bottom, // same: Math.min(window.innerWidth, 1000)
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.1;

  var names = ["America","Asia","Europe","Oceania", "Others", "Worldwide"],
    colors = [ "#083E77", "#342350", "#567235", "#8B161C", "#DF7C00"],
    opacityDefault = 0.8;

  var matrix_1 = [[1154.95652174,  450.13043478,  450.65217391,  450.69565217,
                   464.7826087 ],
                 [ 264.13043478,  262.43478261,  263.52173913,  262.43478261,
                   268.86956522],
                 [ 825.30434783,  824.69565217, 1281.7826087 ,  824.60869565,
                   977.43478261],
                 [  21.17391304,   21.17391304,   21.17391304,  219.73913043,
                    43.43478261],
                 [ 253.26086957,  249.91304348,  249.91304348,  260.30434783,
                   267.65217391]]; // Others


  var matrix_2 =[[3179.78688525, 1190.24590164, 1191.39344262, 1196.1147541 ,
                  1278.55737705],
                 [ 701.36065574,  700.40983607,  700.80327869,  699.70491803,
                   705.67213115],
                 [2160.24590164, 2156.13114754, 3072.16393443, 2157.31147541,
                  2535.37704918],
                 [  74.93442623,   74.90163934,   74.90163934,  795.26229508,
                   108.19672131],
                 [ 918.78688525,  914.81967213,  914.98360656,  949.55737705,
                  1019.50819672]];

  ////////////////////////////////////////////////////////////
  /////////// Create scale and layout functions //////////////
  ////////////////////////////////////////////////////////////

  var colors = d3.scaleOrdinal()
      .domain(d3.range(names.length))
    .range(colors);

  var chord = d3.chord()
    .padAngle(.15)
    .sortChords(d3.descending)

  var arc = d3.arc()
  .innerRadius(innerRadius*1.01)
  .outerRadius(outerRadius);

  var path = d3.ribbon().radius(innerRadius);

  function getDefaultLayout() {
      return d3.layout.chord()
      .padding(0.15)
      .sortChords(d3.descending);
  }  
  var last_layout; //store layout between updates
  var currentInfoContinent = 0; // store the continent on which displays info widget

  var g =d3.select("#chord-diagram").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + (width/2 + margin.left) + "," + (height/2 + margin.top) + ")")

////////////////////////////////////////////////////////////
////////////////////// Create SVG //////////////////////////
////////////////////////////////////////////////////////////
function updateChord(matrix){
  layout = getDefaultLayout(); //create a new layout object
  layout.matrix(matrix);

  /* Create/update "group" elements */
    var groupG = g.selectAll("g.group")
        .data(layout.groups(), function (d) {
            return d.index; 
            //use a key function in case the 
            //groups are sorted differently between updates
        });
    
    groupG.exit()
        .transition()
            .duration(1500)
            .attr("opacity", 0.5)
            .remove(); //remove after transitions are complete
    
    var newGroups = groupG.enter().append("g")
        .attr("class", "group");


    //create the arc paths and set the constant attributes
    //(those based on the group index, not on the value)
    newGroups.append("path")
        .attr("id", function (d) {
            return "group" + d.index;
            //using d.index and not i to maintain consistency
            //even if groups are sorted
        })
        .style("fill", function (d) {
            return colors(d.index);
        });
    
    //update the paths to match the layout
    groupG.select("path") 
        .transition()
            .duration(1500)
            .attr("opacity", 0.5) //optional, just to observe the transition
        .attrTween("d", arcTween( last_layout ))
            .transition().duration(100).attr("opacity", 1) //reset opacity
        ;
    
    //create the group labels
    newGroups.append("svg:text")
        .attr("xlink:href", function (d) {
            return "#group" + d.index;
        })
        .attr("dy", ".35em")
        .attr("color", "#fff")
        .text(function (d) {
            return names[d.index];
        });

    //position group labels to match layout
    groupG.select("text")
        .transition()
            .duration(1500)
            .attr("transform", function(d) {
                d.angle = (d.startAngle + d.endAngle) / 2;
                //store the midpoint angle in the data object
                
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" +
                    " translate(" + (innerRadius + 46) + ")" + 
                    (d.angle > Math.PI ? " rotate(180)" : " rotate(0)"); 
                //include the rotate zero so that transforms can be interpolated
            })
            .attr("text-anchor", function (d) {
                return d.angle > Math.PI ? "end" : "begin";
            });
    
    
    /* Create/update the chord paths */
    var chordPaths = g.selectAll("path.chord")
        .data(layout.chords(), chordKey );
            //specify a key function to match chords
            //between updates
        
    
    //create the new chord paths
    var newChords = chordPaths.enter()
        .append("path")
        .attr("class", "chord"); 
    

    //handle exiting paths:
    chordPaths.exit().transition()
        .duration(1500)
        .attr("opacity", opacityDefault)
        .remove();

    //update the path shape
    chordPaths.transition()
        .duration(1500)
        .attr("opacity", 0.5) //optional, just to observe the transition
        .style("fill", function (d) {
            return colors(d.source.index);
        })
        .attrTween("d", chordTween(last_layout))
        .transition().duration(100).attr("opacity", opacityDefault) //reset opacity
    ;

    //add the mouseover/fade out behaviour to the groups
    //this is reset on every update, so it will use the latest
    //chordPaths selection
    

    groupG.on("mouseover", fade(.1))
      .on("mouseout", fade(opacityDefault))
      .on("click", mouseoverChord)
      .on("mouseout", mouseoutChord);

    /*
    .data(function(chords) { return chords.groups; })
    .enter().append("g")
    .attr("class", "group")
    .on("mouseover", fade(.1))
    .on("mouseout", fade(opacityDefault))

    // text popups
    .on("click", mouseoverChord)
    .on("mouseout", mouseoutChord);
    */
    //the "unfade" is handled with CSS :hover class on g#circle
    //you could also do it using a mouseout event:
    /*
    g.on("mouseout", function() {
        if (this == g.node() )
            //only respond to mouseout of the entire circle
            //not mouseout events for sub-components
            chordPaths.classed("fade", false);
    });
    */
    
    last_layout = layout; //save for next update
    isUpdating = false;
//  }); //end of d3.json
}

function arcTween(oldLayout) {
    //this function will be called once per update cycle
    
    //Create a key:value version of the old layout's groups array
    //so we can easily find the matching group 
    //even if the group index values don't match the array index
    //(because of sorting)
    var oldGroups = {};
    if (oldLayout) {
        oldLayout.groups().forEach( function(groupData) {
            oldGroups[ groupData.index ] = groupData;
        });
    }
    
    return function (d, i) {
        var tween;
        var old = oldGroups[d.index];
        if (old) { //there's a matching old group
            tween = d3.interpolate(old, d);
        }
        else {
            //create a zero-width arc object
            var emptyArc = {startAngle:d.startAngle,
                            endAngle:d.startAngle};
            tween = d3.interpolate(emptyArc, d);
        }
        
        return function (t) {
            return arc( tween(t) );
        };
    };
}

function chordKey(data) {
    return (data.source.index < data.target.index) ?
        data.source.index  + "-" + data.target.index:
        data.target.index  + "-" + data.source.index;
    
    //create a key that will represent the relationship
    //between these two groups *regardless*
    //of which group is called 'source' and which 'target'
}
function chordTween(oldLayout) {
    //this function will be called once per update cycle
    
    //Create a key:value version of the old layout's chords array
    //so we can easily find the matching chord 
    //(which may not have a matching index)
    
    var oldChords = {};
    
    if (oldLayout) {
        oldLayout.chords().forEach( function(chordData) {
            oldChords[ chordKey(chordData) ] = chordData;
        });
    }
    
    return function (d, i) {
        //this function will be called for each active chord
        
        var tween;
        var old = oldChords[ chordKey(d) ];
        if (old) {
            //old is not undefined, i.e.
            //there is a matching old chord value
            
            //check whether source and target have been switched:
            if (d.source.index != old.source.index ){
                //swap source and target to match the new data
                old = {
                    source: old.target,
                    target: old.source
                };
            }
            
            tween = d3.interpolate(old, d);
        }
        else {
            //create a zero-width chord object
            var emptyChord = {
                source: { startAngle: d.source.startAngle,
                         endAngle: d.source.startAngle},
                target: { startAngle: d.target.startAngle,
                         endAngle: d.target.startAngle}
            };
            tween = d3.interpolate( emptyChord, d );
        }

        return function (t) {
            //this function calculates the intermediary shapes
            return path(tween(t));
        };
    };
}

////////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
////////////////////////////////////////////////////////////

//Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(d,i) {
    g.selectAll("path.chord")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
    .transition()
        .style("opacity", opacity);
  };
}//fade

  //Highlight hovered over chord
function mouseoverChord(d,i) {
  //Show hovered over chord with full opacity
  if(!isUpdating){
    d3.select(this)
      .transition()
          .style("opacity", 1);

    currentInfoContinent = i;
    setInfos()
  }
}

function setInfos(){
  i = currentInfoContinent;
  var all_products = matrix[i].reduce(function(a,b){return a+b;});
  document.getElementById('continent').innerHTML = "From " + names[i];
  document.getElementById("continentInfo").rows[1].cells[1].innerHTML = Math.round(matrix[i][0]);
  document.getElementById("continentInfo").rows[2].cells[1].innerHTML = Math.round(matrix[i][1]);
  document.getElementById("continentInfo").rows[3].cells[1].innerHTML = Math.round(matrix[i][2]);
  document.getElementById("continentInfo").rows[4].cells[1].innerHTML = Math.round(matrix[i][3]);
  document.getElementById("continentInfo").rows[5].cells[1].innerHTML = Math.round(matrix[i][4]);
  document.getElementById("continentInfo").rows[6].cells[1].innerHTML = Math.round(all_products);
  
  document.getElementById("continentInfo").rows[1].cells[2].innerHTML = (matrix[i][0]/all_products*100).toFixed(2)+ "%";
  document.getElementById("continentInfo").rows[2].cells[2].innerHTML = (matrix[i][1]/all_products*100).toFixed(2)+ "%";
  document.getElementById("continentInfo").rows[3].cells[2].innerHTML = (matrix[i][2]/all_products*100).toFixed(2)+ "%";
  document.getElementById("continentInfo").rows[4].cells[2].innerHTML = (matrix[i][3]/all_products*100).toFixed(2)+ "%";
  document.getElementById("continentInfo").rows[5].cells[2].innerHTML = (matrix[i][4]/all_products*100).toFixed(2)+ "%";

}
//Bring all chords back to default opacity
function mouseoutChord(d) {

  //Set opacity back to default for all
  g.selectAll("path.chord")
    .transition()
    .style("opacity", opacityDefault);
  }      //function mouseoutChord

function disableButton(buttonNode) {
    d3.selectAll(".test")
        .attr("disabled", function(d) {
            return this === buttonNode? "true": null;
        });
}


d3.select("#before-onymous").on("click", function () {
    matrix = matrix_1
    //replace this with a file url as appropriate
    updateChord(matrix_1);
    setInfos()
    //enable other buttons, disable this one
    disableButton(this);
});

d3.select("#after-onymous").on("click", function () {
    matrix = matrix_2
    //replace this with a file url as appropriate
    updateChord(matrix_2);
    setInfos()
    //enable other buttons, disable this one
    disableButton(this);
});

matrix = matrix_1
updateChord(matrix_2);
updateChord(matrix_1);
setInfos();
