const validateAlpha = (val) => {
    return val.match(/^[A-Za-z]+$/) ? true : false;
  }
  const validateNum = (val) => {
    return val.match(/^\d+$/) ? true : false;
  }
  
  const pantype = (val) => {
    switch (val) {
      case 'A':
        type = 'Association of persons (AOP)';
        code = 'A';
        break;
      case 'B':
        type = 'Body of individuals (BOI)';
        code = 'B';
        break;
      case 'C':
        type = 'Company';
        code = 'C';
        break;
      case 'F':
        type = 'Firm';
        code = 'F';
        break;
      case 'G':
        type = 'Government';
        code = 'G';
        break;
      case 'H':
        type = 'HUF [Hindu joint family|Hindu undivided family]';
        code = 'H';
        break;
      case 'L':
        type = 'Local authority';
        code = 'L';
        break;
      case 'J':
        type = '';
        code = 'J';
        break;
      case 'P':
        type = 'Personal';
        code = 'P';
        break;
      case 'T':
        type = 'Trust (AOP)';
        code = 'T';
        break;
  
      default:
        type = null;
        code = null;
        return [type, code, false];
    }
    return [type, code, true];
  }
  
  const pan = (panNumber) => {
    const firstSet = panNumber.substring(0, 3);
    const valFirst = validateAlpha(firstSet);
  
    if (valFirst == true) {
      const secondSet = panNumber.substring(3, 4);
      const valSecond = pantype(secondSet);
      if (valSecond[2] == true) {
        const thirdSet = panNumber.substring(5, 9);
        const valThird = validateNum(thirdSet);
  
        if (valThird == true) {
          const fourthSet = panNumber.substring(9, 10);
          const valFourth = validateAlpha(fourthSet);
          if (valFourth == true) {
            return [valSecond[0], valSecond[1], true];
          } else {
            return [null, null, false];
          }
        } else {
          return [null, null, false];
        }
      } else {
        return [null, null, false];
      }
    } else {
      return [null, null, false];
    }
  }
  console.log(pan('ABCPA1234D'));
  