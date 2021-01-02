// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\p{L}/u'
//
// Use like this:
//
// import { generatedRegexMatcher } from './THIS_FILE';
// const result = generatedRegexMatcher(str);
// console.log(result);
//
// Outputs:
// {
//   index: 0, // position of the string that matched
//   matches: [ 'foo', 'bar'] // groups that matched
// }
// or null in case there is no match

type GroupMarkers = [];

type TempGroupMarkers = [];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [];
  const tempGroupStartMarkers: TempGroupMarkers = [];
  const quantifierCounters: QuantifierCounters = [];

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0001(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const fiber0001 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * charOrSet
   * /\p{L}/u
   *  ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.codePointAt(i)!;
  let result0 = false;

  if (charCode0 <= 42888) {
    if (charCode0 <= 3948) {
      if (charCode0 <= 2676) {
        if (charCode0 <= 1957) {
          if (charCode0 <= 929) {
            if (charCode0 <= 740) {
              if (charCode0 <= 186) {
                if (charCode0 <= 170) {
                  if (charCode0 <= 122) {
                    if (charCode0 <= 90) {
                      result0 = charCode0 >= 65;
                    } else {
                      result0 = charCode0 >= 97;
                    }
                  } else {
                    result0 = charCode0 === 170;
                  }
                } else {
                  result0 = charCode0 === 181 || charCode0 === 186;
                }
              } else {
                if (charCode0 <= 705) {
                  if (charCode0 <= 246) {
                    if (charCode0 <= 214) {
                      result0 = charCode0 >= 192;
                    } else {
                      result0 = charCode0 >= 216;
                    }
                  } else {
                    result0 = charCode0 >= 248;
                  }
                } else {
                  if (charCode0 <= 721) {
                    result0 = charCode0 >= 710;
                  } else {
                    result0 = charCode0 >= 736;
                  }
                }
              }
            } else {
              if (charCode0 <= 893) {
                if (charCode0 <= 884) {
                  if (charCode0 <= 750) {
                    result0 = charCode0 === 748 || charCode0 === 750;
                  } else {
                    result0 = charCode0 >= 880;
                  }
                } else {
                  if (charCode0 <= 887) {
                    result0 = charCode0 >= 886;
                  } else {
                    result0 = charCode0 >= 890;
                  }
                }
              } else {
                if (charCode0 <= 906) {
                  if (charCode0 <= 902) {
                    result0 = charCode0 === 895 || charCode0 === 902;
                  } else {
                    result0 = charCode0 >= 904;
                  }
                } else {
                  if (charCode0 === 908) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 910;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 1647) {
              if (charCode0 <= 1369) {
                if (charCode0 <= 1327) {
                  if (charCode0 <= 1153) {
                    if (charCode0 <= 1013) {
                      result0 = charCode0 >= 931;
                    } else {
                      result0 = charCode0 >= 1015;
                    }
                  } else {
                    result0 = charCode0 >= 1162;
                  }
                } else {
                  if (charCode0 <= 1366) {
                    result0 = charCode0 >= 1329;
                  } else {
                    result0 = charCode0 === 1369;
                  }
                }
              } else {
                if (charCode0 <= 1522) {
                  if (charCode0 <= 1514) {
                    if (charCode0 <= 1416) {
                      result0 = charCode0 >= 1376;
                    } else {
                      result0 = charCode0 >= 1488;
                    }
                  } else {
                    result0 = charCode0 >= 1519;
                  }
                } else {
                  if (charCode0 <= 1610) {
                    result0 = charCode0 >= 1568;
                  } else {
                    result0 = charCode0 >= 1646;
                  }
                }
              }
            } else {
              if (charCode0 <= 1788) {
                if (charCode0 <= 1766) {
                  if (charCode0 <= 1749) {
                    if (charCode0 <= 1747) {
                      result0 = charCode0 >= 1649;
                    } else {
                      result0 = charCode0 === 1749;
                    }
                  } else {
                    result0 = charCode0 >= 1765;
                  }
                } else {
                  if (charCode0 <= 1775) {
                    result0 = charCode0 >= 1774;
                  } else {
                    result0 = charCode0 >= 1786;
                  }
                }
              } else {
                if (charCode0 <= 1808) {
                  result0 = charCode0 === 1791 || charCode0 === 1808;
                } else {
                  if (charCode0 <= 1839) {
                    result0 = charCode0 >= 1810;
                  } else {
                    result0 = charCode0 >= 1869;
                  }
                }
              }
            }
          }
        } else {
          if (charCode0 <= 2472) {
            if (charCode0 <= 2154) {
              if (charCode0 <= 2069) {
                if (charCode0 <= 2037) {
                  if (charCode0 <= 2026) {
                    if (charCode0 === 1969) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 1994;
                    }
                  } else {
                    result0 = charCode0 >= 2036;
                  }
                } else {
                  if (charCode0 === 2042) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 2048;
                  }
                }
              } else {
                if (charCode0 <= 2088) {
                  if (charCode0 <= 2084) {
                    result0 = charCode0 === 2074 || charCode0 === 2084;
                  } else {
                    result0 = charCode0 === 2088;
                  }
                } else {
                  if (charCode0 <= 2136) {
                    result0 = charCode0 >= 2112;
                  } else {
                    result0 = charCode0 >= 2144;
                  }
                }
              }
            } else {
              if (charCode0 <= 2384) {
                if (charCode0 <= 2361) {
                  if (charCode0 <= 2247) {
                    if (charCode0 <= 2228) {
                      result0 = charCode0 >= 2208;
                    } else {
                      result0 = charCode0 >= 2230;
                    }
                  } else {
                    result0 = charCode0 >= 2308;
                  }
                } else {
                  result0 = charCode0 === 2365 || charCode0 === 2384;
                }
              } else {
                if (charCode0 <= 2444) {
                  if (charCode0 <= 2432) {
                    if (charCode0 <= 2401) {
                      result0 = charCode0 >= 2392;
                    } else {
                      result0 = charCode0 >= 2417;
                    }
                  } else {
                    result0 = charCode0 >= 2437;
                  }
                } else {
                  if (charCode0 <= 2448) {
                    result0 = charCode0 >= 2447;
                  } else {
                    result0 = charCode0 >= 2451;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 2570) {
              if (charCode0 <= 2510) {
                if (charCode0 <= 2489) {
                  if (charCode0 <= 2482) {
                    if (charCode0 <= 2480) {
                      result0 = charCode0 >= 2474;
                    } else {
                      result0 = charCode0 === 2482;
                    }
                  } else {
                    result0 = charCode0 >= 2486;
                  }
                } else {
                  result0 = charCode0 === 2493 || charCode0 === 2510;
                }
              } else {
                if (charCode0 <= 2545) {
                  if (charCode0 <= 2529) {
                    if (charCode0 <= 2525) {
                      result0 = charCode0 >= 2524;
                    } else {
                      result0 = charCode0 >= 2527;
                    }
                  } else {
                    result0 = charCode0 >= 2544;
                  }
                } else {
                  if (charCode0 === 2556) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 2565;
                  }
                }
              }
            } else {
              if (charCode0 <= 2614) {
                if (charCode0 <= 2608) {
                  if (charCode0 <= 2600) {
                    if (charCode0 <= 2576) {
                      result0 = charCode0 >= 2575;
                    } else {
                      result0 = charCode0 >= 2579;
                    }
                  } else {
                    result0 = charCode0 >= 2602;
                  }
                } else {
                  if (charCode0 <= 2611) {
                    result0 = charCode0 >= 2610;
                  } else {
                    result0 = charCode0 >= 2613;
                  }
                }
              } else {
                if (charCode0 <= 2652) {
                  if (charCode0 <= 2617) {
                    result0 = charCode0 >= 2616;
                  } else {
                    result0 = charCode0 >= 2649;
                  }
                } else {
                  if (charCode0 === 2654) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 2674;
                  }
                }
              }
            }
          }
        }
      } else {
        if (charCode0 <= 3200) {
          if (charCode0 <= 2929) {
            if (charCode0 <= 2809) {
              if (charCode0 <= 2739) {
                if (charCode0 <= 2728) {
                  if (charCode0 <= 2705) {
                    if (charCode0 <= 2701) {
                      result0 = charCode0 >= 2693;
                    } else {
                      result0 = charCode0 >= 2703;
                    }
                  } else {
                    result0 = charCode0 >= 2707;
                  }
                } else {
                  if (charCode0 <= 2736) {
                    result0 = charCode0 >= 2730;
                  } else {
                    result0 = charCode0 >= 2738;
                  }
                }
              } else {
                if (charCode0 <= 2768) {
                  if (charCode0 <= 2749) {
                    if (charCode0 <= 2745) {
                      result0 = charCode0 >= 2741;
                    } else {
                      result0 = charCode0 === 2749;
                    }
                  } else {
                    result0 = charCode0 === 2768;
                  }
                } else {
                  if (charCode0 <= 2785) {
                    result0 = charCode0 >= 2784;
                  } else {
                    result0 = charCode0 === 2809;
                  }
                }
              }
            } else {
              if (charCode0 <= 2867) {
                if (charCode0 <= 2856) {
                  if (charCode0 <= 2832) {
                    if (charCode0 <= 2828) {
                      result0 = charCode0 >= 2821;
                    } else {
                      result0 = charCode0 >= 2831;
                    }
                  } else {
                    result0 = charCode0 >= 2835;
                  }
                } else {
                  if (charCode0 <= 2864) {
                    result0 = charCode0 >= 2858;
                  } else {
                    result0 = charCode0 >= 2866;
                  }
                }
              } else {
                if (charCode0 <= 2909) {
                  if (charCode0 <= 2877) {
                    if (charCode0 <= 2873) {
                      result0 = charCode0 >= 2869;
                    } else {
                      result0 = charCode0 === 2877;
                    }
                  } else {
                    result0 = charCode0 >= 2908;
                  }
                } else {
                  if (charCode0 <= 2913) {
                    result0 = charCode0 >= 2911;
                  } else {
                    result0 = charCode0 === 2929;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 3001) {
              if (charCode0 <= 2970) {
                if (charCode0 <= 2960) {
                  if (charCode0 <= 2954) {
                    if (charCode0 === 2947) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 2949;
                    }
                  } else {
                    result0 = charCode0 >= 2958;
                  }
                } else {
                  if (charCode0 <= 2965) {
                    result0 = charCode0 >= 2962;
                  } else {
                    result0 = charCode0 >= 2969;
                  }
                }
              } else {
                if (charCode0 <= 2980) {
                  if (charCode0 <= 2975) {
                    if (charCode0 === 2972) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 2974;
                    }
                  } else {
                    result0 = charCode0 >= 2979;
                  }
                } else {
                  if (charCode0 <= 2986) {
                    result0 = charCode0 >= 2984;
                  } else {
                    result0 = charCode0 >= 2990;
                  }
                }
              }
            } else {
              if (charCode0 <= 3129) {
                if (charCode0 <= 3088) {
                  if (charCode0 <= 3084) {
                    if (charCode0 === 3024) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 3077;
                    }
                  } else {
                    result0 = charCode0 >= 3086;
                  }
                } else {
                  if (charCode0 <= 3112) {
                    result0 = charCode0 >= 3090;
                  } else {
                    result0 = charCode0 >= 3114;
                  }
                }
              } else {
                if (charCode0 <= 3162) {
                  if (charCode0 === 3133) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 3160;
                  }
                } else {
                  if (charCode0 <= 3169) {
                    result0 = charCode0 >= 3168;
                  } else {
                    result0 = charCode0 === 3200;
                  }
                }
              }
            }
          }
        } else {
          if (charCode0 <= 3515) {
            if (charCode0 <= 3340) {
              if (charCode0 <= 3257) {
                if (charCode0 <= 3240) {
                  if (charCode0 <= 3216) {
                    if (charCode0 <= 3212) {
                      result0 = charCode0 >= 3205;
                    } else {
                      result0 = charCode0 >= 3214;
                    }
                  } else {
                    result0 = charCode0 >= 3218;
                  }
                } else {
                  if (charCode0 <= 3251) {
                    result0 = charCode0 >= 3242;
                  } else {
                    result0 = charCode0 >= 3253;
                  }
                }
              } else {
                if (charCode0 <= 3297) {
                  if (charCode0 <= 3294) {
                    result0 = charCode0 === 3261 || charCode0 === 3294;
                  } else {
                    result0 = charCode0 >= 3296;
                  }
                } else {
                  if (charCode0 <= 3314) {
                    result0 = charCode0 >= 3313;
                  } else {
                    result0 = charCode0 >= 3332;
                  }
                }
              }
            } else {
              if (charCode0 <= 3414) {
                if (charCode0 <= 3389) {
                  if (charCode0 <= 3386) {
                    if (charCode0 <= 3344) {
                      result0 = charCode0 >= 3342;
                    } else {
                      result0 = charCode0 >= 3346;
                    }
                  } else {
                    result0 = charCode0 === 3389;
                  }
                } else {
                  if (charCode0 === 3406) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 3412;
                  }
                }
              } else {
                if (charCode0 <= 3478) {
                  if (charCode0 <= 3455) {
                    if (charCode0 <= 3425) {
                      result0 = charCode0 >= 3423;
                    } else {
                      result0 = charCode0 >= 3450;
                    }
                  } else {
                    result0 = charCode0 >= 3461;
                  }
                } else {
                  if (charCode0 <= 3505) {
                    result0 = charCode0 >= 3482;
                  } else {
                    result0 = charCode0 >= 3507;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 3749) {
              if (charCode0 <= 3654) {
                if (charCode0 <= 3632) {
                  if (charCode0 <= 3526) {
                    if (charCode0 === 3517) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 3520;
                    }
                  } else {
                    result0 = charCode0 >= 3585;
                  }
                } else {
                  if (charCode0 <= 3635) {
                    result0 = charCode0 >= 3634;
                  } else {
                    result0 = charCode0 >= 3648;
                  }
                }
              } else {
                if (charCode0 <= 3722) {
                  if (charCode0 <= 3716) {
                    if (charCode0 <= 3714) {
                      result0 = charCode0 >= 3713;
                    } else {
                      result0 = charCode0 === 3716;
                    }
                  } else {
                    result0 = charCode0 >= 3718;
                  }
                } else {
                  if (charCode0 <= 3747) {
                    result0 = charCode0 >= 3724;
                  } else {
                    result0 = charCode0 === 3749;
                  }
                }
              }
            } else {
              if (charCode0 <= 3782) {
                if (charCode0 <= 3773) {
                  if (charCode0 <= 3763) {
                    if (charCode0 <= 3760) {
                      result0 = charCode0 >= 3751;
                    } else {
                      result0 = charCode0 >= 3762;
                    }
                  } else {
                    result0 = charCode0 === 3773;
                  }
                } else {
                  if (charCode0 <= 3780) {
                    result0 = charCode0 >= 3776;
                  } else {
                    result0 = charCode0 === 3782;
                  }
                }
              } else {
                if (charCode0 <= 3840) {
                  if (charCode0 <= 3807) {
                    result0 = charCode0 >= 3804;
                  } else {
                    result0 = charCode0 === 3840;
                  }
                } else {
                  if (charCode0 <= 3911) {
                    result0 = charCode0 >= 3904;
                  } else {
                    result0 = charCode0 >= 3913;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (charCode0 <= 7965) {
        if (charCode0 <= 5900) {
          if (charCode0 <= 4744) {
            if (charCode0 <= 4238) {
              if (charCode0 <= 4189) {
                if (charCode0 <= 4159) {
                  if (charCode0 <= 4138) {
                    if (charCode0 <= 3980) {
                      result0 = charCode0 >= 3976;
                    } else {
                      result0 = charCode0 >= 4096;
                    }
                  } else {
                    result0 = charCode0 === 4159;
                  }
                } else {
                  if (charCode0 <= 4181) {
                    result0 = charCode0 >= 4176;
                  } else {
                    result0 = charCode0 >= 4186;
                  }
                }
              } else {
                if (charCode0 <= 4208) {
                  if (charCode0 <= 4198) {
                    if (charCode0 === 4193) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 4197;
                    }
                  } else {
                    result0 = charCode0 >= 4206;
                  }
                } else {
                  if (charCode0 <= 4225) {
                    result0 = charCode0 >= 4213;
                  } else {
                    result0 = charCode0 === 4238;
                  }
                }
              }
            } else {
              if (charCode0 <= 4680) {
                if (charCode0 <= 4301) {
                  if (charCode0 <= 4295) {
                    if (charCode0 <= 4293) {
                      result0 = charCode0 >= 4256;
                    } else {
                      result0 = charCode0 === 4295;
                    }
                  } else {
                    result0 = charCode0 === 4301;
                  }
                } else {
                  if (charCode0 <= 4346) {
                    result0 = charCode0 >= 4304;
                  } else {
                    result0 = charCode0 >= 4348;
                  }
                }
              } else {
                if (charCode0 <= 4696) {
                  if (charCode0 <= 4694) {
                    if (charCode0 <= 4685) {
                      result0 = charCode0 >= 4682;
                    } else {
                      result0 = charCode0 >= 4688;
                    }
                  } else {
                    result0 = charCode0 === 4696;
                  }
                } else {
                  if (charCode0 <= 4701) {
                    result0 = charCode0 >= 4698;
                  } else {
                    result0 = charCode0 >= 4704;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 4954) {
              if (charCode0 <= 4800) {
                if (charCode0 <= 4789) {
                  if (charCode0 <= 4784) {
                    if (charCode0 <= 4749) {
                      result0 = charCode0 >= 4746;
                    } else {
                      result0 = charCode0 >= 4752;
                    }
                  } else {
                    result0 = charCode0 >= 4786;
                  }
                } else {
                  if (charCode0 <= 4798) {
                    result0 = charCode0 >= 4792;
                  } else {
                    result0 = charCode0 === 4800;
                  }
                }
              } else {
                if (charCode0 <= 4880) {
                  if (charCode0 <= 4822) {
                    if (charCode0 <= 4805) {
                      result0 = charCode0 >= 4802;
                    } else {
                      result0 = charCode0 >= 4808;
                    }
                  } else {
                    result0 = charCode0 >= 4824;
                  }
                } else {
                  if (charCode0 <= 4885) {
                    result0 = charCode0 >= 4882;
                  } else {
                    result0 = charCode0 >= 4888;
                  }
                }
              }
            } else {
              if (charCode0 <= 5759) {
                if (charCode0 <= 5117) {
                  if (charCode0 <= 5109) {
                    if (charCode0 <= 5007) {
                      result0 = charCode0 >= 4992;
                    } else {
                      result0 = charCode0 >= 5024;
                    }
                  } else {
                    result0 = charCode0 >= 5112;
                  }
                } else {
                  if (charCode0 <= 5740) {
                    result0 = charCode0 >= 5121;
                  } else {
                    result0 = charCode0 >= 5743;
                  }
                }
              } else {
                if (charCode0 <= 5866) {
                  if (charCode0 <= 5786) {
                    result0 = charCode0 >= 5761;
                  } else {
                    result0 = charCode0 >= 5792;
                  }
                } else {
                  if (charCode0 <= 5880) {
                    result0 = charCode0 >= 5873;
                  } else {
                    result0 = charCode0 >= 5888;
                  }
                }
              }
            }
          }
        } else {
          if (charCode0 <= 6740) {
            if (charCode0 <= 6276) {
              if (charCode0 <= 6000) {
                if (charCode0 <= 5969) {
                  if (charCode0 <= 5937) {
                    if (charCode0 <= 5905) {
                      result0 = charCode0 >= 5902;
                    } else {
                      result0 = charCode0 >= 5920;
                    }
                  } else {
                    result0 = charCode0 >= 5952;
                  }
                } else {
                  if (charCode0 <= 5996) {
                    result0 = charCode0 >= 5984;
                  } else {
                    result0 = charCode0 >= 5998;
                  }
                }
              } else {
                if (charCode0 <= 6108) {
                  if (charCode0 <= 6103) {
                    if (charCode0 <= 6067) {
                      result0 = charCode0 >= 6016;
                    } else {
                      result0 = charCode0 === 6103;
                    }
                  } else {
                    result0 = charCode0 === 6108;
                  }
                } else {
                  if (charCode0 <= 6264) {
                    result0 = charCode0 >= 6176;
                  } else {
                    result0 = charCode0 >= 6272;
                  }
                }
              }
            } else {
              if (charCode0 <= 6509) {
                if (charCode0 <= 6389) {
                  if (charCode0 <= 6314) {
                    if (charCode0 <= 6312) {
                      result0 = charCode0 >= 6279;
                    } else {
                      result0 = charCode0 === 6314;
                    }
                  } else {
                    result0 = charCode0 >= 6320;
                  }
                } else {
                  if (charCode0 <= 6430) {
                    result0 = charCode0 >= 6400;
                  } else {
                    result0 = charCode0 >= 6480;
                  }
                }
              } else {
                if (charCode0 <= 6601) {
                  if (charCode0 <= 6571) {
                    if (charCode0 <= 6516) {
                      result0 = charCode0 >= 6512;
                    } else {
                      result0 = charCode0 >= 6528;
                    }
                  } else {
                    result0 = charCode0 >= 6576;
                  }
                } else {
                  if (charCode0 <= 6678) {
                    result0 = charCode0 >= 6656;
                  } else {
                    result0 = charCode0 >= 6688;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 7304) {
              if (charCode0 <= 7087) {
                if (charCode0 <= 6987) {
                  if (charCode0 <= 6963) {
                    if (charCode0 === 6823) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 6917;
                    }
                  } else {
                    result0 = charCode0 >= 6981;
                  }
                } else {
                  if (charCode0 <= 7072) {
                    result0 = charCode0 >= 7043;
                  } else {
                    result0 = charCode0 >= 7086;
                  }
                }
              } else {
                if (charCode0 <= 7247) {
                  if (charCode0 <= 7203) {
                    if (charCode0 <= 7141) {
                      result0 = charCode0 >= 7098;
                    } else {
                      result0 = charCode0 >= 7168;
                    }
                  } else {
                    result0 = charCode0 >= 7245;
                  }
                } else {
                  if (charCode0 <= 7293) {
                    result0 = charCode0 >= 7258;
                  } else {
                    result0 = charCode0 >= 7296;
                  }
                }
              }
            } else {
              if (charCode0 <= 7414) {
                if (charCode0 <= 7404) {
                  if (charCode0 <= 7359) {
                    if (charCode0 <= 7354) {
                      result0 = charCode0 >= 7312;
                    } else {
                      result0 = charCode0 >= 7357;
                    }
                  } else {
                    result0 = charCode0 >= 7401;
                  }
                } else {
                  if (charCode0 <= 7411) {
                    result0 = charCode0 >= 7406;
                  } else {
                    result0 = charCode0 >= 7413;
                  }
                }
              } else {
                if (charCode0 <= 7615) {
                  if (charCode0 === 7418) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 7424;
                  }
                } else {
                  if (charCode0 <= 7957) {
                    result0 = charCode0 >= 7680;
                  } else {
                    result0 = charCode0 >= 7960;
                  }
                }
              }
            }
          }
        }
      } else {
        if (charCode0 <= 11507) {
          if (charCode0 <= 8348) {
            if (charCode0 <= 8126) {
              if (charCode0 <= 8027) {
                if (charCode0 <= 8023) {
                  if (charCode0 <= 8013) {
                    if (charCode0 <= 8005) {
                      result0 = charCode0 >= 7968;
                    } else {
                      result0 = charCode0 >= 8008;
                    }
                  } else {
                    result0 = charCode0 >= 8016;
                  }
                } else {
                  result0 = charCode0 === 8025 || charCode0 === 8027;
                }
              } else {
                if (charCode0 <= 8116) {
                  if (charCode0 <= 8061) {
                    if (charCode0 === 8029) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 8031;
                    }
                  } else {
                    result0 = charCode0 >= 8064;
                  }
                } else {
                  if (charCode0 <= 8124) {
                    result0 = charCode0 >= 8118;
                  } else {
                    result0 = charCode0 === 8126;
                  }
                }
              }
            } else {
              if (charCode0 <= 8172) {
                if (charCode0 <= 8147) {
                  if (charCode0 <= 8140) {
                    if (charCode0 <= 8132) {
                      result0 = charCode0 >= 8130;
                    } else {
                      result0 = charCode0 >= 8134;
                    }
                  } else {
                    result0 = charCode0 >= 8144;
                  }
                } else {
                  if (charCode0 <= 8155) {
                    result0 = charCode0 >= 8150;
                  } else {
                    result0 = charCode0 >= 8160;
                  }
                }
              } else {
                if (charCode0 <= 8305) {
                  if (charCode0 <= 8188) {
                    if (charCode0 <= 8180) {
                      result0 = charCode0 >= 8178;
                    } else {
                      result0 = charCode0 >= 8182;
                    }
                  } else {
                    result0 = charCode0 === 8305;
                  }
                } else {
                  if (charCode0 === 8319) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 8336;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 8505) {
              if (charCode0 <= 8477) {
                if (charCode0 <= 8467) {
                  if (charCode0 <= 8455) {
                    result0 = charCode0 === 8450 || charCode0 === 8455;
                  } else {
                    result0 = charCode0 >= 8458;
                  }
                } else {
                  if (charCode0 === 8469) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 8473;
                  }
                }
              } else {
                if (charCode0 <= 8488) {
                  if (charCode0 <= 8486) {
                    result0 = charCode0 === 8484 || charCode0 === 8486;
                  } else {
                    result0 = charCode0 === 8488;
                  }
                } else {
                  if (charCode0 <= 8493) {
                    result0 = charCode0 >= 8490;
                  } else {
                    result0 = charCode0 >= 8495;
                  }
                }
              }
            } else {
              if (charCode0 <= 11310) {
                if (charCode0 <= 8526) {
                  if (charCode0 <= 8521) {
                    if (charCode0 <= 8511) {
                      result0 = charCode0 >= 8508;
                    } else {
                      result0 = charCode0 >= 8517;
                    }
                  } else {
                    result0 = charCode0 === 8526;
                  }
                } else {
                  if (charCode0 <= 8580) {
                    result0 = charCode0 >= 8579;
                  } else {
                    result0 = charCode0 >= 11264;
                  }
                }
              } else {
                if (charCode0 <= 11492) {
                  if (charCode0 <= 11358) {
                    result0 = charCode0 >= 11312;
                  } else {
                    result0 = charCode0 >= 11360;
                  }
                } else {
                  if (charCode0 <= 11502) {
                    result0 = charCode0 >= 11499;
                  } else {
                    result0 = charCode0 >= 11506;
                  }
                }
              }
            }
          }
        } else {
          if (charCode0 <= 12438) {
            if (charCode0 <= 11710) {
              if (charCode0 <= 11631) {
                if (charCode0 <= 11565) {
                  if (charCode0 <= 11559) {
                    if (charCode0 <= 11557) {
                      result0 = charCode0 >= 11520;
                    } else {
                      result0 = charCode0 === 11559;
                    }
                  } else {
                    result0 = charCode0 === 11565;
                  }
                } else {
                  if (charCode0 <= 11623) {
                    result0 = charCode0 >= 11568;
                  } else {
                    result0 = charCode0 === 11631;
                  }
                }
              } else {
                if (charCode0 <= 11694) {
                  if (charCode0 <= 11686) {
                    if (charCode0 <= 11670) {
                      result0 = charCode0 >= 11648;
                    } else {
                      result0 = charCode0 >= 11680;
                    }
                  } else {
                    result0 = charCode0 >= 11688;
                  }
                } else {
                  if (charCode0 <= 11702) {
                    result0 = charCode0 >= 11696;
                  } else {
                    result0 = charCode0 >= 11704;
                  }
                }
              }
            } else {
              if (charCode0 <= 11823) {
                if (charCode0 <= 11734) {
                  if (charCode0 <= 11726) {
                    if (charCode0 <= 11718) {
                      result0 = charCode0 >= 11712;
                    } else {
                      result0 = charCode0 >= 11720;
                    }
                  } else {
                    result0 = charCode0 >= 11728;
                  }
                } else {
                  if (charCode0 <= 11742) {
                    result0 = charCode0 >= 11736;
                  } else {
                    result0 = charCode0 === 11823;
                  }
                }
              } else {
                if (charCode0 <= 12341) {
                  if (charCode0 <= 12294) {
                    result0 = charCode0 >= 12293;
                  } else {
                    result0 = charCode0 >= 12337;
                  }
                } else {
                  if (charCode0 <= 12348) {
                    result0 = charCode0 >= 12347;
                  } else {
                    result0 = charCode0 >= 12353;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 42124) {
              if (charCode0 <= 12686) {
                if (charCode0 <= 12543) {
                  if (charCode0 <= 12538) {
                    if (charCode0 <= 12447) {
                      result0 = charCode0 >= 12445;
                    } else {
                      result0 = charCode0 >= 12449;
                    }
                  } else {
                    result0 = charCode0 >= 12540;
                  }
                } else {
                  if (charCode0 <= 12591) {
                    result0 = charCode0 >= 12549;
                  } else {
                    result0 = charCode0 >= 12593;
                  }
                }
              } else {
                if (charCode0 <= 19903) {
                  if (charCode0 <= 12799) {
                    if (charCode0 <= 12735) {
                      result0 = charCode0 >= 12704;
                    } else {
                      result0 = charCode0 >= 12784;
                    }
                  } else {
                    result0 = charCode0 >= 13312;
                  }
                } else {
                  if (charCode0 <= 40956) {
                    result0 = charCode0 >= 19968;
                  } else {
                    result0 = charCode0 >= 40960;
                  }
                }
              }
            } else {
              if (charCode0 <= 42606) {
                if (charCode0 <= 42527) {
                  if (charCode0 <= 42508) {
                    if (charCode0 <= 42237) {
                      result0 = charCode0 >= 42192;
                    } else {
                      result0 = charCode0 >= 42240;
                    }
                  } else {
                    result0 = charCode0 >= 42512;
                  }
                } else {
                  if (charCode0 <= 42539) {
                    result0 = charCode0 >= 42538;
                  } else {
                    result0 = charCode0 >= 42560;
                  }
                }
              } else {
                if (charCode0 <= 42725) {
                  if (charCode0 <= 42653) {
                    result0 = charCode0 >= 42623;
                  } else {
                    result0 = charCode0 >= 42656;
                  }
                } else {
                  if (charCode0 <= 42783) {
                    result0 = charCode0 >= 42775;
                  } else {
                    result0 = charCode0 >= 42786;
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (charCode0 <= 70457) {
      if (charCode0 <= 66256) {
        if (charCode0 <= 43866) {
          if (charCode0 <= 43560) {
            if (charCode0 <= 43259) {
              if (charCode0 <= 43018) {
                if (charCode0 <= 43009) {
                  if (charCode0 <= 42954) {
                    if (charCode0 <= 42943) {
                      result0 = charCode0 >= 42891;
                    } else {
                      result0 = charCode0 >= 42946;
                    }
                  } else {
                    result0 = charCode0 >= 42997;
                  }
                } else {
                  if (charCode0 <= 43013) {
                    result0 = charCode0 >= 43011;
                  } else {
                    result0 = charCode0 >= 43015;
                  }
                }
              } else {
                if (charCode0 <= 43187) {
                  if (charCode0 <= 43123) {
                    if (charCode0 <= 43042) {
                      result0 = charCode0 >= 43020;
                    } else {
                      result0 = charCode0 >= 43072;
                    }
                  } else {
                    result0 = charCode0 >= 43138;
                  }
                } else {
                  if (charCode0 <= 43255) {
                    result0 = charCode0 >= 43250;
                  } else {
                    result0 = charCode0 === 43259;
                  }
                }
              }
            } else {
              if (charCode0 <= 43442) {
                if (charCode0 <= 43334) {
                  if (charCode0 <= 43301) {
                    if (charCode0 <= 43262) {
                      result0 = charCode0 >= 43261;
                    } else {
                      result0 = charCode0 >= 43274;
                    }
                  } else {
                    result0 = charCode0 >= 43312;
                  }
                } else {
                  if (charCode0 <= 43388) {
                    result0 = charCode0 >= 43360;
                  } else {
                    result0 = charCode0 >= 43396;
                  }
                }
              } else {
                if (charCode0 <= 43503) {
                  if (charCode0 <= 43492) {
                    if (charCode0 === 43471) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 43488;
                    }
                  } else {
                    result0 = charCode0 >= 43494;
                  }
                } else {
                  if (charCode0 <= 43518) {
                    result0 = charCode0 >= 43514;
                  } else {
                    result0 = charCode0 >= 43520;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 43714) {
              if (charCode0 <= 43695) {
                if (charCode0 <= 43638) {
                  if (charCode0 <= 43595) {
                    if (charCode0 <= 43586) {
                      result0 = charCode0 >= 43584;
                    } else {
                      result0 = charCode0 >= 43588;
                    }
                  } else {
                    result0 = charCode0 >= 43616;
                  }
                } else {
                  if (charCode0 === 43642) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 43646;
                  }
                }
              } else {
                if (charCode0 <= 43709) {
                  if (charCode0 <= 43702) {
                    if (charCode0 === 43697) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 43701;
                    }
                  } else {
                    result0 = charCode0 >= 43705;
                  }
                } else {
                  result0 = charCode0 === 43712 || charCode0 === 43714;
                }
              }
            } else {
              if (charCode0 <= 43790) {
                if (charCode0 <= 43764) {
                  if (charCode0 <= 43754) {
                    if (charCode0 <= 43741) {
                      result0 = charCode0 >= 43739;
                    } else {
                      result0 = charCode0 >= 43744;
                    }
                  } else {
                    result0 = charCode0 >= 43762;
                  }
                } else {
                  if (charCode0 <= 43782) {
                    result0 = charCode0 >= 43777;
                  } else {
                    result0 = charCode0 >= 43785;
                  }
                }
              } else {
                if (charCode0 <= 43814) {
                  if (charCode0 <= 43798) {
                    result0 = charCode0 >= 43793;
                  } else {
                    result0 = charCode0 >= 43808;
                  }
                } else {
                  if (charCode0 <= 43822) {
                    result0 = charCode0 >= 43816;
                  } else {
                    result0 = charCode0 >= 43824;
                  }
                }
              }
            }
          }
        } else {
          if (charCode0 <= 64967) {
            if (charCode0 <= 64285) {
              if (charCode0 <= 55291) {
                if (charCode0 <= 55203) {
                  if (charCode0 <= 44002) {
                    if (charCode0 <= 43881) {
                      result0 = charCode0 >= 43868;
                    } else {
                      result0 = charCode0 >= 43888;
                    }
                  } else {
                    result0 = charCode0 >= 44032;
                  }
                } else {
                  if (charCode0 <= 55238) {
                    result0 = charCode0 >= 55216;
                  } else {
                    result0 = charCode0 >= 55243;
                  }
                }
              } else {
                if (charCode0 <= 64262) {
                  if (charCode0 <= 64217) {
                    if (charCode0 <= 64109) {
                      result0 = charCode0 >= 63744;
                    } else {
                      result0 = charCode0 >= 64112;
                    }
                  } else {
                    result0 = charCode0 >= 64256;
                  }
                } else {
                  if (charCode0 <= 64279) {
                    result0 = charCode0 >= 64275;
                  } else {
                    result0 = charCode0 === 64285;
                  }
                }
              }
            } else {
              if (charCode0 <= 64321) {
                if (charCode0 <= 64316) {
                  if (charCode0 <= 64310) {
                    if (charCode0 <= 64296) {
                      result0 = charCode0 >= 64287;
                    } else {
                      result0 = charCode0 >= 64298;
                    }
                  } else {
                    result0 = charCode0 >= 64312;
                  }
                } else {
                  if (charCode0 === 64318) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 64320;
                  }
                }
              } else {
                if (charCode0 <= 64829) {
                  if (charCode0 <= 64433) {
                    if (charCode0 <= 64324) {
                      result0 = charCode0 >= 64323;
                    } else {
                      result0 = charCode0 >= 64326;
                    }
                  } else {
                    result0 = charCode0 >= 64467;
                  }
                } else {
                  if (charCode0 <= 64911) {
                    result0 = charCode0 >= 64848;
                  } else {
                    result0 = charCode0 >= 64914;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 65500) {
              if (charCode0 <= 65370) {
                if (charCode0 <= 65276) {
                  if (charCode0 <= 65140) {
                    if (charCode0 <= 65019) {
                      result0 = charCode0 >= 65008;
                    } else {
                      result0 = charCode0 >= 65136;
                    }
                  } else {
                    result0 = charCode0 >= 65142;
                  }
                } else {
                  if (charCode0 <= 65338) {
                    result0 = charCode0 >= 65313;
                  } else {
                    result0 = charCode0 >= 65345;
                  }
                }
              } else {
                if (charCode0 <= 65487) {
                  if (charCode0 <= 65479) {
                    if (charCode0 <= 65470) {
                      result0 = charCode0 >= 65382;
                    } else {
                      result0 = charCode0 >= 65474;
                    }
                  } else {
                    result0 = charCode0 >= 65482;
                  }
                } else {
                  if (charCode0 <= 65495) {
                    result0 = charCode0 >= 65490;
                  } else {
                    result0 = charCode0 >= 65498;
                  }
                }
              }
            } else {
              if (charCode0 <= 65613) {
                if (charCode0 <= 65594) {
                  if (charCode0 <= 65574) {
                    if (charCode0 <= 65547) {
                      result0 = charCode0 >= 65536;
                    } else {
                      result0 = charCode0 >= 65549;
                    }
                  } else {
                    result0 = charCode0 >= 65576;
                  }
                } else {
                  if (charCode0 <= 65597) {
                    result0 = charCode0 >= 65596;
                  } else {
                    result0 = charCode0 >= 65599;
                  }
                }
              } else {
                if (charCode0 <= 65786) {
                  if (charCode0 <= 65629) {
                    result0 = charCode0 >= 65616;
                  } else {
                    result0 = charCode0 >= 65664;
                  }
                } else {
                  if (charCode0 <= 66204) {
                    result0 = charCode0 >= 66176;
                  } else {
                    result0 = charCode0 >= 66208;
                  }
                }
              }
            }
          }
        }
      } else {
        if (charCode0 <= 68437) {
          if (charCode0 <= 67644) {
            if (charCode0 <= 66811) {
              if (charCode0 <= 66461) {
                if (charCode0 <= 66377) {
                  if (charCode0 <= 66368) {
                    if (charCode0 <= 66335) {
                      result0 = charCode0 >= 66304;
                    } else {
                      result0 = charCode0 >= 66349;
                    }
                  } else {
                    result0 = charCode0 >= 66370;
                  }
                } else {
                  if (charCode0 <= 66421) {
                    result0 = charCode0 >= 66384;
                  } else {
                    result0 = charCode0 >= 66432;
                  }
                }
              } else {
                if (charCode0 <= 66717) {
                  if (charCode0 <= 66511) {
                    if (charCode0 <= 66499) {
                      result0 = charCode0 >= 66464;
                    } else {
                      result0 = charCode0 >= 66504;
                    }
                  } else {
                    result0 = charCode0 >= 66560;
                  }
                } else {
                  if (charCode0 <= 66771) {
                    result0 = charCode0 >= 66736;
                  } else {
                    result0 = charCode0 >= 66776;
                  }
                }
              }
            } else {
              if (charCode0 <= 67431) {
                if (charCode0 <= 67382) {
                  if (charCode0 <= 66915) {
                    if (charCode0 <= 66855) {
                      result0 = charCode0 >= 66816;
                    } else {
                      result0 = charCode0 >= 66864;
                    }
                  } else {
                    result0 = charCode0 >= 67072;
                  }
                } else {
                  if (charCode0 <= 67413) {
                    result0 = charCode0 >= 67392;
                  } else {
                    result0 = charCode0 >= 67424;
                  }
                }
              } else {
                if (charCode0 <= 67637) {
                  if (charCode0 <= 67592) {
                    if (charCode0 <= 67589) {
                      result0 = charCode0 >= 67584;
                    } else {
                      result0 = charCode0 === 67592;
                    }
                  } else {
                    result0 = charCode0 >= 67594;
                  }
                } else {
                  if (charCode0 <= 67640) {
                    result0 = charCode0 >= 67639;
                  } else {
                    result0 = charCode0 === 67644;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 68096) {
              if (charCode0 <= 67829) {
                if (charCode0 <= 67742) {
                  if (charCode0 <= 67702) {
                    if (charCode0 <= 67669) {
                      result0 = charCode0 >= 67647;
                    } else {
                      result0 = charCode0 >= 67680;
                    }
                  } else {
                    result0 = charCode0 >= 67712;
                  }
                } else {
                  if (charCode0 <= 67826) {
                    result0 = charCode0 >= 67808;
                  } else {
                    result0 = charCode0 >= 67828;
                  }
                }
              } else {
                if (charCode0 <= 68023) {
                  if (charCode0 <= 67897) {
                    if (charCode0 <= 67861) {
                      result0 = charCode0 >= 67840;
                    } else {
                      result0 = charCode0 >= 67872;
                    }
                  } else {
                    result0 = charCode0 >= 67968;
                  }
                } else {
                  if (charCode0 <= 68031) {
                    result0 = charCode0 >= 68030;
                  } else {
                    result0 = charCode0 === 68096;
                  }
                }
              }
            } else {
              if (charCode0 <= 68252) {
                if (charCode0 <= 68149) {
                  if (charCode0 <= 68119) {
                    if (charCode0 <= 68115) {
                      result0 = charCode0 >= 68112;
                    } else {
                      result0 = charCode0 >= 68117;
                    }
                  } else {
                    result0 = charCode0 >= 68121;
                  }
                } else {
                  if (charCode0 <= 68220) {
                    result0 = charCode0 >= 68192;
                  } else {
                    result0 = charCode0 >= 68224;
                  }
                }
              } else {
                if (charCode0 <= 68324) {
                  if (charCode0 <= 68295) {
                    result0 = charCode0 >= 68288;
                  } else {
                    result0 = charCode0 >= 68297;
                  }
                } else {
                  if (charCode0 <= 68405) {
                    result0 = charCode0 >= 68352;
                  } else {
                    result0 = charCode0 >= 68416;
                  }
                }
              }
            }
          }
        } else {
          if (charCode0 <= 70002) {
            if (charCode0 <= 69415) {
              if (charCode0 <= 68850) {
                if (charCode0 <= 68680) {
                  if (charCode0 <= 68497) {
                    if (charCode0 <= 68466) {
                      result0 = charCode0 >= 68448;
                    } else {
                      result0 = charCode0 >= 68480;
                    }
                  } else {
                    result0 = charCode0 >= 68608;
                  }
                } else {
                  if (charCode0 <= 68786) {
                    result0 = charCode0 >= 68736;
                  } else {
                    result0 = charCode0 >= 68800;
                  }
                }
              } else {
                if (charCode0 <= 69297) {
                  if (charCode0 <= 69289) {
                    if (charCode0 <= 68899) {
                      result0 = charCode0 >= 68864;
                    } else {
                      result0 = charCode0 >= 69248;
                    }
                  } else {
                    result0 = charCode0 >= 69296;
                  }
                } else {
                  if (charCode0 <= 69404) {
                    result0 = charCode0 >= 69376;
                  } else {
                    result0 = charCode0 === 69415;
                  }
                }
              }
            } else {
              if (charCode0 <= 69807) {
                if (charCode0 <= 69622) {
                  if (charCode0 <= 69572) {
                    if (charCode0 <= 69445) {
                      result0 = charCode0 >= 69424;
                    } else {
                      result0 = charCode0 >= 69552;
                    }
                  } else {
                    result0 = charCode0 >= 69600;
                  }
                } else {
                  if (charCode0 <= 69687) {
                    result0 = charCode0 >= 69635;
                  } else {
                    result0 = charCode0 >= 69763;
                  }
                }
              } else {
                if (charCode0 <= 69956) {
                  if (charCode0 <= 69926) {
                    if (charCode0 <= 69864) {
                      result0 = charCode0 >= 69840;
                    } else {
                      result0 = charCode0 >= 69891;
                    }
                  } else {
                    result0 = charCode0 === 69956;
                  }
                } else {
                  if (charCode0 === 69959) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 69968;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 70285) {
              if (charCode0 <= 70108) {
                if (charCode0 <= 70084) {
                  if (charCode0 <= 70066) {
                    if (charCode0 === 70006) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 70019;
                    }
                  } else {
                    result0 = charCode0 >= 70081;
                  }
                } else {
                  result0 = charCode0 === 70106 || charCode0 === 70108;
                }
              } else {
                if (charCode0 <= 70278) {
                  if (charCode0 <= 70187) {
                    if (charCode0 <= 70161) {
                      result0 = charCode0 >= 70144;
                    } else {
                      result0 = charCode0 >= 70163;
                    }
                  } else {
                    result0 = charCode0 >= 70272;
                  }
                } else {
                  if (charCode0 === 70280) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 70282;
                  }
                }
              }
            } else {
              if (charCode0 <= 70416) {
                if (charCode0 <= 70366) {
                  if (charCode0 <= 70312) {
                    if (charCode0 <= 70301) {
                      result0 = charCode0 >= 70287;
                    } else {
                      result0 = charCode0 >= 70303;
                    }
                  } else {
                    result0 = charCode0 >= 70320;
                  }
                } else {
                  if (charCode0 <= 70412) {
                    result0 = charCode0 >= 70405;
                  } else {
                    result0 = charCode0 >= 70415;
                  }
                }
              } else {
                if (charCode0 <= 70448) {
                  if (charCode0 <= 70440) {
                    result0 = charCode0 >= 70419;
                  } else {
                    result0 = charCode0 >= 70442;
                  }
                } else {
                  if (charCode0 <= 70451) {
                    result0 = charCode0 >= 70450;
                  } else {
                    result0 = charCode0 >= 70453;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (charCode0 <= 113817) {
        if (charCode0 <= 72768) {
          if (charCode0 <= 71945) {
            if (charCode0 <= 71086) {
              if (charCode0 <= 70730) {
                if (charCode0 <= 70497) {
                  if (charCode0 <= 70480) {
                    result0 = charCode0 === 70461 || charCode0 === 70480;
                  } else {
                    result0 = charCode0 >= 70493;
                  }
                } else {
                  if (charCode0 <= 70708) {
                    result0 = charCode0 >= 70656;
                  } else {
                    result0 = charCode0 >= 70727;
                  }
                }
              } else {
                if (charCode0 <= 70853) {
                  if (charCode0 <= 70831) {
                    if (charCode0 <= 70753) {
                      result0 = charCode0 >= 70751;
                    } else {
                      result0 = charCode0 >= 70784;
                    }
                  } else {
                    result0 = charCode0 >= 70852;
                  }
                } else {
                  if (charCode0 === 70855) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 71040;
                  }
                }
              }
            } else {
              if (charCode0 <= 71352) {
                if (charCode0 <= 71236) {
                  if (charCode0 <= 71215) {
                    if (charCode0 <= 71131) {
                      result0 = charCode0 >= 71128;
                    } else {
                      result0 = charCode0 >= 71168;
                    }
                  } else {
                    result0 = charCode0 === 71236;
                  }
                } else {
                  if (charCode0 <= 71338) {
                    result0 = charCode0 >= 71296;
                  } else {
                    result0 = charCode0 === 71352;
                  }
                }
              } else {
                if (charCode0 <= 71903) {
                  if (charCode0 <= 71723) {
                    if (charCode0 <= 71450) {
                      result0 = charCode0 >= 71424;
                    } else {
                      result0 = charCode0 >= 71680;
                    }
                  } else {
                    result0 = charCode0 >= 71840;
                  }
                } else {
                  if (charCode0 <= 71942) {
                    result0 = charCode0 >= 71935;
                  } else {
                    result0 = charCode0 === 71945;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 72192) {
              if (charCode0 <= 72001) {
                if (charCode0 <= 71983) {
                  if (charCode0 <= 71958) {
                    if (charCode0 <= 71955) {
                      result0 = charCode0 >= 71948;
                    } else {
                      result0 = charCode0 >= 71957;
                    }
                  } else {
                    result0 = charCode0 >= 71960;
                  }
                } else {
                  result0 = charCode0 === 71999 || charCode0 === 72001;
                }
              } else {
                if (charCode0 <= 72161) {
                  if (charCode0 <= 72144) {
                    if (charCode0 <= 72103) {
                      result0 = charCode0 >= 72096;
                    } else {
                      result0 = charCode0 >= 72106;
                    }
                  } else {
                    result0 = charCode0 === 72161;
                  }
                } else {
                  result0 = charCode0 === 72163 || charCode0 === 72192;
                }
              }
            } else {
              if (charCode0 <= 72349) {
                if (charCode0 <= 72272) {
                  if (charCode0 <= 72250) {
                    if (charCode0 <= 72242) {
                      result0 = charCode0 >= 72203;
                    } else {
                      result0 = charCode0 === 72250;
                    }
                  } else {
                    result0 = charCode0 === 72272;
                  }
                } else {
                  if (charCode0 <= 72329) {
                    result0 = charCode0 >= 72284;
                  } else {
                    result0 = charCode0 === 72349;
                  }
                }
              } else {
                if (charCode0 <= 72712) {
                  if (charCode0 <= 72440) {
                    result0 = charCode0 >= 72384;
                  } else {
                    result0 = charCode0 >= 72704;
                  }
                } else {
                  if (charCode0 <= 72750) {
                    result0 = charCode0 >= 72714;
                  } else {
                    result0 = charCode0 === 72768;
                  }
                }
              }
            }
          }
        } else {
          if (charCode0 <= 92995) {
            if (charCode0 <= 73458) {
              if (charCode0 <= 73030) {
                if (charCode0 <= 72969) {
                  if (charCode0 <= 72966) {
                    if (charCode0 <= 72847) {
                      result0 = charCode0 >= 72818;
                    } else {
                      result0 = charCode0 >= 72960;
                    }
                  } else {
                    result0 = charCode0 >= 72968;
                  }
                } else {
                  if (charCode0 <= 73008) {
                    result0 = charCode0 >= 72971;
                  } else {
                    result0 = charCode0 === 73030;
                  }
                }
              } else {
                if (charCode0 <= 73097) {
                  if (charCode0 <= 73064) {
                    if (charCode0 <= 73061) {
                      result0 = charCode0 >= 73056;
                    } else {
                      result0 = charCode0 >= 73063;
                    }
                  } else {
                    result0 = charCode0 >= 73066;
                  }
                } else {
                  if (charCode0 === 73112) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 73440;
                  }
                }
              }
            } else {
              if (charCode0 <= 83526) {
                if (charCode0 <= 75075) {
                  if (charCode0 <= 74649) {
                    if (charCode0 === 73648) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 73728;
                    }
                  } else {
                    result0 = charCode0 >= 74880;
                  }
                } else {
                  if (charCode0 <= 78894) {
                    result0 = charCode0 >= 77824;
                  } else {
                    result0 = charCode0 >= 82944;
                  }
                }
              } else {
                if (charCode0 <= 92909) {
                  if (charCode0 <= 92766) {
                    if (charCode0 <= 92728) {
                      result0 = charCode0 >= 92160;
                    } else {
                      result0 = charCode0 >= 92736;
                    }
                  } else {
                    result0 = charCode0 >= 92880;
                  }
                } else {
                  if (charCode0 <= 92975) {
                    result0 = charCode0 >= 92928;
                  } else {
                    result0 = charCode0 >= 92992;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 101589) {
              if (charCode0 <= 94032) {
                if (charCode0 <= 93823) {
                  if (charCode0 <= 93071) {
                    if (charCode0 <= 93047) {
                      result0 = charCode0 >= 93027;
                    } else {
                      result0 = charCode0 >= 93053;
                    }
                  } else {
                    result0 = charCode0 >= 93760;
                  }
                } else {
                  if (charCode0 <= 94026) {
                    result0 = charCode0 >= 93952;
                  } else {
                    result0 = charCode0 === 94032;
                  }
                }
              } else {
                if (charCode0 <= 94179) {
                  if (charCode0 <= 94177) {
                    if (charCode0 <= 94111) {
                      result0 = charCode0 >= 94099;
                    } else {
                      result0 = charCode0 >= 94176;
                    }
                  } else {
                    result0 = charCode0 === 94179;
                  }
                } else {
                  if (charCode0 <= 100343) {
                    result0 = charCode0 >= 94208;
                  } else {
                    result0 = charCode0 >= 100352;
                  }
                }
              }
            } else {
              if (charCode0 <= 111355) {
                if (charCode0 <= 110930) {
                  if (charCode0 <= 110878) {
                    if (charCode0 <= 101640) {
                      result0 = charCode0 >= 101632;
                    } else {
                      result0 = charCode0 >= 110592;
                    }
                  } else {
                    result0 = charCode0 >= 110928;
                  }
                } else {
                  if (charCode0 <= 110951) {
                    result0 = charCode0 >= 110948;
                  } else {
                    result0 = charCode0 >= 110960;
                  }
                }
              } else {
                if (charCode0 <= 113788) {
                  if (charCode0 <= 113770) {
                    result0 = charCode0 >= 113664;
                  } else {
                    result0 = charCode0 >= 113776;
                  }
                } else {
                  if (charCode0 <= 113800) {
                    result0 = charCode0 >= 113792;
                  } else {
                    result0 = charCode0 >= 113808;
                  }
                }
              }
            }
          }
        }
      } else {
        if (charCode0 <= 126495) {
          if (charCode0 <= 120512) {
            if (charCode0 <= 120069) {
              if (charCode0 <= 119974) {
                if (charCode0 <= 119967) {
                  if (charCode0 <= 119964) {
                    if (charCode0 <= 119892) {
                      result0 = charCode0 >= 119808;
                    } else {
                      result0 = charCode0 >= 119894;
                    }
                  } else {
                    result0 = charCode0 >= 119966;
                  }
                } else {
                  if (charCode0 === 119970) {
                    result0 = true;
                  } else {
                    result0 = charCode0 >= 119973;
                  }
                }
              } else {
                if (charCode0 <= 119995) {
                  if (charCode0 <= 119993) {
                    if (charCode0 <= 119980) {
                      result0 = charCode0 >= 119977;
                    } else {
                      result0 = charCode0 >= 119982;
                    }
                  } else {
                    result0 = charCode0 === 119995;
                  }
                } else {
                  if (charCode0 <= 120003) {
                    result0 = charCode0 >= 119997;
                  } else {
                    result0 = charCode0 >= 120005;
                  }
                }
              }
            } else {
              if (charCode0 <= 120126) {
                if (charCode0 <= 120092) {
                  if (charCode0 <= 120084) {
                    if (charCode0 <= 120074) {
                      result0 = charCode0 >= 120071;
                    } else {
                      result0 = charCode0 >= 120077;
                    }
                  } else {
                    result0 = charCode0 >= 120086;
                  }
                } else {
                  if (charCode0 <= 120121) {
                    result0 = charCode0 >= 120094;
                  } else {
                    result0 = charCode0 >= 120123;
                  }
                }
              } else {
                if (charCode0 <= 120144) {
                  if (charCode0 <= 120134) {
                    if (charCode0 <= 120132) {
                      result0 = charCode0 >= 120128;
                    } else {
                      result0 = charCode0 === 120134;
                    }
                  } else {
                    result0 = charCode0 >= 120138;
                  }
                } else {
                  if (charCode0 <= 120485) {
                    result0 = charCode0 >= 120146;
                  } else {
                    result0 = charCode0 >= 120488;
                  }
                }
              }
            }
          } else {
            if (charCode0 <= 120779) {
              if (charCode0 <= 120654) {
                if (charCode0 <= 120596) {
                  if (charCode0 <= 120570) {
                    if (charCode0 <= 120538) {
                      result0 = charCode0 >= 120514;
                    } else {
                      result0 = charCode0 >= 120540;
                    }
                  } else {
                    result0 = charCode0 >= 120572;
                  }
                } else {
                  if (charCode0 <= 120628) {
                    result0 = charCode0 >= 120598;
                  } else {
                    result0 = charCode0 >= 120630;
                  }
                }
              } else {
                if (charCode0 <= 120744) {
                  if (charCode0 <= 120712) {
                    if (charCode0 <= 120686) {
                      result0 = charCode0 >= 120656;
                    } else {
                      result0 = charCode0 >= 120688;
                    }
                  } else {
                    result0 = charCode0 >= 120714;
                  }
                } else {
                  if (charCode0 <= 120770) {
                    result0 = charCode0 >= 120746;
                  } else {
                    result0 = charCode0 >= 120772;
                  }
                }
              }
            } else {
              if (charCode0 <= 125124) {
                if (charCode0 <= 123214) {
                  if (charCode0 <= 123197) {
                    if (charCode0 <= 123180) {
                      result0 = charCode0 >= 123136;
                    } else {
                      result0 = charCode0 >= 123191;
                    }
                  } else {
                    result0 = charCode0 === 123214;
                  }
                } else {
                  if (charCode0 <= 123627) {
                    result0 = charCode0 >= 123584;
                  } else {
                    result0 = charCode0 >= 124928;
                  }
                }
              } else {
                if (charCode0 <= 125259) {
                  if (charCode0 <= 125251) {
                    result0 = charCode0 >= 125184;
                  } else {
                    result0 = charCode0 === 125259;
                  }
                } else {
                  if (charCode0 <= 126467) {
                    result0 = charCode0 >= 126464;
                  } else {
                    result0 = charCode0 >= 126469;
                  }
                }
              }
            }
          }
        } else {
          if (charCode0 <= 126559) {
            if (charCode0 <= 126537) {
              if (charCode0 <= 126519) {
                if (charCode0 <= 126503) {
                  if (charCode0 <= 126500) {
                    if (charCode0 <= 126498) {
                      result0 = charCode0 >= 126497;
                    } else {
                      result0 = charCode0 === 126500;
                    }
                  } else {
                    result0 = charCode0 === 126503;
                  }
                } else {
                  if (charCode0 <= 126514) {
                    result0 = charCode0 >= 126505;
                  } else {
                    result0 = charCode0 >= 126516;
                  }
                }
              } else {
                if (charCode0 <= 126530) {
                  if (charCode0 <= 126523) {
                    result0 = charCode0 === 126521 || charCode0 === 126523;
                  } else {
                    result0 = charCode0 === 126530;
                  }
                } else {
                  result0 = charCode0 === 126535 || charCode0 === 126537;
                }
              }
            } else {
              if (charCode0 <= 126551) {
                if (charCode0 <= 126546) {
                  if (charCode0 <= 126543) {
                    if (charCode0 === 126539) {
                      result0 = true;
                    } else {
                      result0 = charCode0 >= 126541;
                    }
                  } else {
                    result0 = charCode0 >= 126545;
                  }
                } else {
                  result0 = charCode0 === 126548 || charCode0 === 126551;
                }
              } else {
                if (charCode0 <= 126555) {
                  result0 = charCode0 === 126553 || charCode0 === 126555;
                } else {
                  result0 = charCode0 === 126557 || charCode0 === 126559;
                }
              }
            }
          } else {
            if (charCode0 <= 126627) {
              if (charCode0 <= 126583) {
                if (charCode0 <= 126570) {
                  if (charCode0 <= 126564) {
                    if (charCode0 <= 126562) {
                      result0 = charCode0 >= 126561;
                    } else {
                      result0 = charCode0 === 126564;
                    }
                  } else {
                    result0 = charCode0 >= 126567;
                  }
                } else {
                  if (charCode0 <= 126578) {
                    result0 = charCode0 >= 126572;
                  } else {
                    result0 = charCode0 >= 126580;
                  }
                }
              } else {
                if (charCode0 <= 126601) {
                  if (charCode0 <= 126590) {
                    if (charCode0 <= 126588) {
                      result0 = charCode0 >= 126585;
                    } else {
                      result0 = charCode0 === 126590;
                    }
                  } else {
                    result0 = charCode0 >= 126592;
                  }
                } else {
                  if (charCode0 <= 126619) {
                    result0 = charCode0 >= 126603;
                  } else {
                    result0 = charCode0 >= 126625;
                  }
                }
              }
            } else {
              if (charCode0 <= 178205) {
                if (charCode0 <= 173789) {
                  if (charCode0 <= 126651) {
                    if (charCode0 <= 126633) {
                      result0 = charCode0 >= 126629;
                    } else {
                      result0 = charCode0 >= 126635;
                    }
                  } else {
                    result0 = charCode0 >= 131072;
                  }
                } else {
                  if (charCode0 <= 177972) {
                    result0 = charCode0 >= 173824;
                  } else {
                    result0 = charCode0 >= 177984;
                  }
                }
              } else {
                if (charCode0 <= 191456) {
                  if (charCode0 <= 183969) {
                    result0 = charCode0 >= 178208;
                  } else {
                    result0 = charCode0 >= 183984;
                  }
                } else {
                  if (charCode0 <= 195101) {
                    result0 = charCode0 >= 194560;
                  } else {
                    if (charCode0 <= 201546) {
                      result0 = charCode0 >= 196608;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (!result0) {
    return -1;
  }
  // surrogate pair might require moving 2 chars ahead
  i += charCode0 >= 0x10000 ? 2 : 1;
  return i;
};
