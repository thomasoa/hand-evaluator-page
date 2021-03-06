Binky = {}
Binky.patterns = {
//          notrump, suit
    '4333':[3.12,  3.60],
    '4432':[3.07,  3.89],
    '5332':[3.04,  3.93],
    '5422':[2.98,  4.19],
    '6322':[2.98,  4.25],
    '4441':[3.05,  4.41],
    '5431':[3.00,  4.47],
    '6331':[3.00,  4.52],
    '7222':[2.92,  4.59],
    '6421':[2.95,  4.76],
    '5521':[2.89,  4.76],
    '7321':[2.97,  4.84],
    '5440':[3.17,  5.12],
    '8221':[2.93,  5.20],
    '5530':[3.11,  5.22],
    '6430':[3.16,  5.23],
    '7330':[3.11,  5.26],
    '7411':[2.92,  5.29],
    '6511':[2.84,  5.32],
    '8311':[2.91,  5.40],
    '7420':[3.08,  5.50],
    '6520':[2.97,  5.53],
    '8320':[3.00,  5.54],
    '9211':[2.87,  5.75],
    '9220':[2.83,  5.88],
    '8410':[3.06,  5.96],
    '7510':[2.99,  6.07],
    '9310':[3.02,  6.09],
    '6610':[2.83,  6.10],
    '10111':[2.36,  6.19],
    '10210':[2.61,  6.36],
    '10300':[2.80,  6.64],
    '9400':[3.08,  6.68],
    '11110':[1.98,  6.75],
    '8500':[3.00,  6.75],
    '7600':[3.00,  6.90],
    '11200':[2.23,  6.91],
    '12100':[1.00,  7.25],
    '13000':[0.59,  7]
};

Binky.holdings = {
//          notrump, suit
        '':  [0.00,  0.00],
        'X': [-0.29,  -0.17],
	'9': [ -0.26,  -0.15],
	'T': [ -0.22,  -0.12],
	'J': [ -0.08,  -0.05],
	'Q': [  0.17,   0.08],
	'K': [  0.60,   0.31],
	'A': [  1.84,   1.16],
	'XX': [ -0.76,  -0.49],
        '9X': [ -0.72,  -0.46],
        'TX': [ -0.64,  -0.41],
        'T9': [ -0.59,  -0.37],
        'JX': [ -0.43,  -0.31],
        'J9': [ -0.40,  -0.28],
        'JT': [ -0.33,  -0.23],
        'QX': [ -0.09,  -0.09],
        'Q9': [ -0.03,  -0.05],
        'QT': [  0.03,  -0.01],
        'QJ': [  0.20,   0.09],
        'KX': [  0.73,   0.46],
        'K9': [  0.78,   0.49],
        'KT': [  0.86,   0.55],
        'KJ': [  1.10,   0.67],
        'KQ': [  1.38,   0.87],
        'AX': [  1.55,   1.04],
        'A9': [  1.59,   1.07],
        'AT': [  1.66,   1.11],
        'AJ': [  1.83,   1.23],
        'AQ': [  2.36,   1.55],
        'AK': [  2.79,   1.93],
        'XXX': [ -1.26,  -0.84],
        '9XX': [ -1.21,  -0.81],
        'TXX': [ -1.10,  -0.74],
        'T9X': [ -1.05,  -0.70],
        'JXX': [ -0.84,  -0.59],
        'J9X': [ -0.77,  -0.53],
        'JTX': [ -0.68,  -0.47],
        'JT9': [ -0.63,  -0.41],
        'QXX': [ -0.34,  -0.30],
        'Q9X': [ -0.25,  -0.24],
        'QTX': [ -0.10,  -0.16],
        'QT9': [ -0.02,  -0.10],
        'QJX': [  0.17,  -0.02],
        'QJ9': [  0.25,   0.01],
        'QJT': [  0.31,   0.09],
        'KXX': [  0.29,   0.20],
        'K9X': [  0.37,   0.26],
        'KTX': [  0.54,   0.36],
        'KT9': [  0.57,   0.37],
        'KJX': [  0.81,   0.53],
        'KJ9': [  0.87,   0.55],
        'KJT': [  0.95,   0.62],
        'AXX': [  1.06,   0.77],
        'KQX': [  1.17,   0.78],
        'A9X': [  1.12,   0.81],
        'KQ9': [  1.26,   0.83],
        'KQT': [  1.31,   0.86],
        'ATX': [  1.28,   0.92],
        'KQJ': [  1.44,   0.96],
        'AT9': [  1.32,   0.97],
        'AJX': [  1.59,   1.11],
        'AJ9': [  1.71,   1.18],
        'AJT': [  1.82,   1.26],
        'AQX': [  1.98,   1.40],
        'AQ9': [  2.05,   1.46],
        'AQT': [  2.16,   1.52],
        'AQJ': [  2.31,   1.64],
        'AKX': [  2.44,   1.77],
        'AK9': [  2.48,   1.82],
        'AKT': [  2.61,   1.88],
        'AKJ': [  2.77,   2.01],
        'AKQ': [  3.01,   2.22],
        'XXXX': [ -1.70,  -1.16],
        '9XXX': [ -1.59,  -1.10],
        'TXXX': [ -1.44,  -1.02],
        'T9XX': [ -1.36,  -0.98],
        'JXXX': [ -1.15,  -0.87],
        'J9XX': [ -1.04,  -0.81],
        'JTXX': [ -0.92,  -0.73],
        'JT9X': [ -0.85,  -0.68],
        'QXXX': [ -0.75,  -0.59],
        'Q9XX': [ -0.63,  -0.52],
        'QTXX': [ -0.47,  -0.43],
        'QT9X': [ -0.40,  -0.37],
        'QJXX': [ -0.27,  -0.29],
        'QJ9X': [ -0.20,  -0.25],
        'QJTX': [ -0.10,  -0.18],
        'QJT9': [ -0.06,  -0.13],
        'KXXX': [ -0.17,  -0.11],
        'K9XX': [ -0.05,  -0.04],
        'KTXX': [  0.10,   0.07],
        'KT9X': [  0.20,   0.12],
        'KJXX': [  0.36,   0.25],
        'KJ9X': [  0.46,   0.32],
        'KJTX': [  0.55,   0.38],
        'KJT9': [  0.63,   0.43],
        'AXXX': [  0.57,   0.45],
        'KQXX': [  0.66,   0.48],
        'A9XX': [  0.68,   0.53],
        'KQ9X': [  0.76,   0.55],
        'KQTX': [  0.85,   0.60],
        'KQT9': [  0.86,   0.62],
        'ATXX': [  0.85,   0.63],
        'AT9X': [  0.95,   0.69],
        'KQJX': [  1.03,   0.72],
        'KQJT': [  1.12,   0.74],
        'KQJ9': [  1.05,   0.77],
        'AJXX': [  1.11,   0.82],
        'AJ9X': [  1.23,   0.90],
        'AJT9': [  1.33,   0.98],
        'AJTX': [  1.35,   0.99],
        'AQXX': [  1.47,   1.10],
        'AQ9X': [  1.57,   1.17],
        'AQT9': [  1.67,   1.25],
        'AQTX': [  1.70,   1.26],
        'AQJX': [  1.89,   1.41],
        'AQJ9': [  1.94,   1.45],
        'AQJT': [  1.91,   1.45],
        'AKXX': [  1.93,   1.48],
        'AK9X': [  2.02,   1.55],
        'AKTX': [  2.16,   1.64],
        'AKT9': [  2.18,   1.64],
        'AKJ9': [  2.36,   1.77],
        'AKJX': [  2.34,   1.77],
        'AKJT': [  2.46,   1.85],
        'AKQX': [  2.67,   1.99],
        'AKQ9': [  2.70,   2.00],
        'AKQT': [  2.76,   2.06],
        'AKQJ': [  2.91,   2.14],
        'XXXXX': [ -2.05,  -1.42],
        '9XXXX': [ -1.97,  -1.38],
        'TXXXX': [ -1.81,  -1.30],
        'T9XXX': [ -1.74,  -1.24],
        'JXXXX': [ -1.55,  -1.14],
        'J9XXX': [ -1.47,  -1.08],
        'JTXXX': [ -1.38,  -1.00],
        'JT9XX': [ -1.31,  -0.95],
        'QXXXX': [ -1.17,  -0.87],
        'Q9XXX': [ -1.06,  -0.79],
        'QTXXX': [ -0.95,  -0.72],
        'QT9XX': [ -0.86,  -0.65],
        'QJXXX': [ -0.73,  -0.57],
        'QJ9XX': [ -0.68,  -0.53],
        'QJTXX': [ -0.56,  -0.43],
        'KXXXX': [ -0.58,  -0.42],
        'QJT9X': [ -0.55,  -0.42],
        'K9XXX': [ -0.47,  -0.33],
        'KTXXX': [ -0.33,  -0.24],
        'KT9XX': [ -0.21,  -0.16],
        'KJXXX': [ -0.06,  -0.06],
        'KJ9XX': [  0.01,   0.00],
        'KJTXX': [  0.11,   0.06],
        'KJT9X': [  0.16,   0.13],
        'KQXXX': [  0.24,   0.16],
        'AXXXX': [  0.18,   0.17],
        'A9XXX': [  0.28,   0.23],
        'KQ9XX': [  0.35,   0.25],
        'KQTXX': [  0.43,   0.31],
        'ATXXX': [  0.46,   0.35],
        'KQT9X': [  0.52,   0.39],
        'AT9XX': [  0.53,   0.42],
        'KQJXX': [  0.63,   0.43],
        'KQJ9X': [  0.69,   0.47],
        'AJXXX': [  0.72,   0.53],
        'KQJTX': [  0.75,   0.53],
        'KQJT9': [  0.82,   0.54],
        'AJ9XX': [  0.83,   0.62],
        'AJTXX': [  0.99,   0.70],
        'AJT9X': [  1.00,   0.74],
        'AQXXX': [  1.10,   0.81],
        'AQ9XX': [  1.20,   0.89],
        'AQTXX': [  1.32,   0.96],
        'AQT9X': [  1.41,   1.03],
        'AQJXX': [  1.54,   1.10],
        'AQJT9': [  1.57,   1.15],
        'AQJ9X': [  1.59,   1.16],
        'AQJTX': [  1.60,   1.16],
        'AKXXX': [  1.55,   1.18],
        'AK9XX': [  1.66,   1.26],
        'AKTXX': [  1.80,   1.34],
        'AKT9X': [  1.91,   1.42],
        'AKJXX': [  2.06,   1.50],
        'AKJ9X': [  2.16,   1.55],
        'AKJTX': [  2.20,   1.58],
        'AKJT9': [  2.18,   1.61],
        'AKQXX': [  2.41,   1.71],
        'AKQ9X': [  2.44,   1.74],
        'AKQTX': [  2.55,   1.77],
        'AKQT9': [  2.58,   1.80],
        'AKQJ9': [  2.73,   1.88],
        'AKQJX': [  2.75,   1.89],
        'AKQJT': [  2.84,   1.97],
        'XXXXXX': [ -2.45,  -1.63],
        '9XXXXX': [ -2.36,  -1.62],
        'TXXXXX': [ -2.22,  -1.53],
        'T9XXXX': [ -2.15,  -1.45],
        'JXXXXX': [ -1.97,  -1.37],
        'J9XXXX': [ -1.94,  -1.32],
        'JTXXXX': [ -1.86,  -1.23],
        'JT9XXX': [ -1.83,  -1.19],
        'QXXXXX': [ -1.60,  -1.11],
        'Q9XXXX': [ -1.56,  -1.08],
        'QTXXXX': [ -1.44,  -0.98],
        'QT9XXX': [ -1.39,  -0.91],
        'QJXXXX': [ -1.22,  -0.81],
        'QJ9XXX': [ -1.16,  -0.75],
        'KXXXXX': [ -0.99,  -0.70],
        'QJTXXX': [ -1.12,  -0.70],
        'QJT9XX': [ -1.07,  -0.65],
        'K9XXXX': [ -0.91,  -0.61],
        'KTXXXX': [ -0.76,  -0.54],
        'KT9XXX': [ -0.69,  -0.46],
        'KJXXXX': [ -0.53,  -0.37],
        'KJ9XXX': [ -0.41,  -0.28],
        'KJTXXX': [ -0.34,  -0.22],
        'KQXXXX': [ -0.16,  -0.13],
        'KJT9XX': [ -0.25,  -0.12],
        'AXXXXX': [ -0.24,  -0.12],
        'KQ9XXX': [ -0.13,  -0.08],
        'A9XXXX': [ -0.12,  -0.02],
        'KQTXXX': [  0.00,   0.02],
        'KQT9XX': [  0.06,   0.06],
        'ATXXXX': [  0.06,   0.07],
        'KQJXXX': [  0.20,   0.14],
        'AT9XXX': [  0.13,   0.14],
        'KQJ9XX': [  0.21,   0.19],
        'AJXXXX': [  0.32,   0.23],
        'KQJTXX': [  0.29,   0.26],
        'KQJT9X': [  0.29,   0.29],
        'AJ9XXX': [  0.44,   0.29],
        'AJTXXX': [  0.57,   0.40],
        'AJT9XX': [  0.63,   0.45],
        'AQXXXX': [  0.76,   0.52],
        'AQ9XXX': [  0.86,   0.57],
        'AQTXXX': [  0.99,   0.65],
        'AQT9XX': [  1.02,   0.71],
        'AQJXXX': [  1.16,   0.79],
        'AQJ9XX': [  1.24,   0.83],
        'AKXXXX': [  1.27,   0.88],
        'AQJTXX': [  1.33,   0.89],
        'AQJT9X': [  1.36,   0.91],
        'AK9XXX': [  1.41,   0.97],
        'AKTXXX': [  1.54,   1.03],
        'AKT9XX': [  1.60,   1.09],
        'AKJXXX': [  1.84,   1.18],
        'AKJ9XX': [  1.93,   1.25],
        'AKJTXX': [  1.95,   1.30],
        'AKJT9X': [  2.02,   1.32],
        'AKQXXX': [  2.21,   1.40],
        'AKQ9XX': [  2.26,   1.46],
        'AKQT9X': [  2.46,   1.48],
        'AKQTXX': [  2.35,   1.51],
        'AKQJXX': [  2.56,   1.61],
        'AKQJ9X': [  2.60,   1.66],
        'AKQJTX': [  2.74,   1.69],
        'AKQJT9': [  2.86,   1.75],
        'XXXXXXX': [ -2.84,  -1.84],
        '9XXXXXX': [ -2.83,  -1.83],
        'TXXXXXX': [ -2.64,  -1.67],
        'T9XXXXX': [ -2.62,  -1.66],
        'JXXXXXX': [ -2.35,  -1.53],
        'J9XXXXX': [ -2.34,  -1.52],
        'JTXXXXX': [ -2.36,  -1.42],
        'JT9XXXX': [ -2.34,  -1.40],
        'QXXXXXX': [ -2.05,  -1.28],
        'Q9XXXXX': [ -2.03,  -1.27],
        'QTXXXXX': [ -1.93,  -1.21],
        'QT9XXXX': [ -1.91,  -1.20],
        'QJXXXXX': [ -1.74,  -1.01],
        'QJ9XXXX': [ -1.72,  -1.00],
        'KXXXXXX': [ -1.40,  -0.90],
        'K9XXXXX': [ -1.38,  -0.88],
        'QJTXXXX': [ -1.63,  -0.88],
        'QJT9XXX': [ -1.61,  -0.86],
        'KTXXXXX': [ -1.14,  -0.71],
        'KT9XXXX': [ -1.12,  -0.70],
        'KJXXXXX': [ -0.94,  -0.57],
        'KJ9XXXX': [ -0.92,  -0.56],
        'KJTXXXX': [ -0.85,  -0.45],
        'KJT9XXX': [ -0.83,  -0.44],
        'AXXXXXX': [ -0.52,  -0.32],
        'KQXXXXX': [ -0.59,  -0.32],
        'A9XXXXX': [ -0.50,  -0.31],
        'KQ9XXXX': [ -0.57,  -0.30],
        'KQTXXXX': [ -0.54,  -0.23],
        'KQT9XXX': [ -0.52,  -0.21],
        'ATXXXXX': [ -0.27,  -0.15],
        'AT9XXXX': [ -0.25,  -0.14],
        'KQJXXXX': [ -0.38,  -0.11],
        'KQJ9XXX': [ -0.36,  -0.10],
        'KQJTXXX': [ -0.32,  -0.04],
        'KQJT9XX': [ -0.30,  -0.02],
        'AJXXXXX': [  0.03,   0.02],
        'AJ9XXXX': [  0.04,   0.04],
        'AJTXXXX': [  0.15,   0.11],
        'AJT9XXX': [  0.17,   0.12],
        'AQXXXXX': [  0.49,   0.26],
        'AQ9XXXX': [  0.51,   0.27],
        'AQTXXXX': [  0.66,   0.39],
        'AQT9XXX': [  0.68,   0.41],
        'AQJXXXX': [  0.87,   0.51],
        'AQJ9XXX': [  0.89,   0.53],
        'AKXXXXX': [  1.05,   0.64],
        'AK9XXXX': [  1.07,   0.66],
        'AQJTXXX': [  1.06,   0.67],
        'AQJT9XX': [  1.08,   0.69],
        'AKTXXXX': [  1.30,   0.76],
        'AKT9XXX': [  1.32,   0.78],
        'AKJXXXX': [  1.67,   0.92],
        'AKJ9XXX': [  1.69,   0.94],
        'AKJTXXX': [  1.69,   0.98],
        'AKJT9XX': [  1.71,   0.99],
        'AKQXXXX': [  2.01,   1.11],
        'AKQ9XXX': [  2.02,   1.12],
        'AKQTXXX': [  2.14,   1.19],
        'AKQT9XX': [  2.15,   1.20],
        'AKQJXXX': [  2.31,   1.29],
        'AKQJ9XX': [  2.33,   1.30],
        'AKQJTXX': [  2.33,   1.32],
        'AKQJT9X': [  2.34,   1.33],
        'TXXXXXXX': [ -3.54,  -2.17],
        'T9XXXXXX': [ -3.53,  -2.15],
        'JTXXXXXX': [ -3.01,  -1.72],
        'JT9XXXXX': [ -3.00,  -1.71],
        'JXXXXXXX': [ -2.71,  -1.66],
        'J9XXXXXX': [ -2.69,  -1.65],
        'QXXXXXXX': [ -2.64,  -1.65],
        'Q9XXXXXX': [ -2.63,  -1.64],
        '9XXXXXXX': [ -2.61,  -1.54],
        'QTXXXXXX': [ -2.26,  -1.30],
        'QT9XXXXX': [ -2.24,  -1.29],
        'QJXXXXXX': [ -2.38,  -1.17],
        'QJ9XXXXX': [ -2.36,  -1.16],
        'QJTXXXXX': [ -2.22,  -1.09],
        'QJT9XXXX': [ -2.21,  -1.07],
        'KTXXXXXX': [ -1.73,  -1.00],
        'KT9XXXXX': [ -1.71,  -0.99],
        'KXXXXXXX': [ -1.39,  -0.83],
        'K9XXXXXX': [ -1.38,  -0.82],
        'KJXXXXXX': [ -1.45,  -0.80],
        'KJ9XXXXX': [ -1.43,  -0.79],
        'KJTXXXXX': [ -1.49,  -0.72],
        'KJT9XXXX': [ -1.47,  -0.70],
        'KQXXXXXX': [ -1.21,  -0.59],
        'KQ9XXXXX': [ -1.20,  -0.57],
        'AXXXXXXX': [ -0.79,  -0.50],
        'A9XXXXXX': [ -0.77,  -0.49],
        'KQTXXXXX': [ -1.09,  -0.46],
        'KQT9XXXX': [ -1.08,  -0.45],
        'AJXXXXXX': [ -0.43,  -0.32],
        'AJ9XXXXX': [ -0.42,  -0.31],
        'KQJXXXXX': [ -0.85,  -0.24],
        'KQJ9XXXX': [ -0.83,  -0.23],
        'ATXXXXXX': [ -0.42,  -0.20],
        'AJTXXXXX': [ -0.39,  -0.20],
        'AT9XXXXX': [ -0.41,  -0.19],
        'KQJTXXXX': [ -0.80,  -0.19],
        'AJT9XXXX': [ -0.37,  -0.19],
        'KQJT9XXX': [ -0.79,  -0.18],
        'AQXXXXXX': [  0.06,  -0.04],
        'AQ9XXXXX': [  0.07,  -0.03],
        'AQTXXXXX': [  0.09,  -0.01],
        'AQT9XXXX': [  0.11,   0.00],
        'AQJXXXXX': [  0.53,   0.21],
        'AQJ9XXXX': [  0.55,   0.22],
        'AQJTXXXX': [  0.57,   0.36],
        'AQJT9XXX': [  0.59,   0.37],
        'AKXXXXXX': [  0.76,   0.40],
        'AK9XXXXX': [  0.77,   0.41],
        'AKTXXXXX': [  1.13,   0.59],
        'AKT9XXXX': [  1.15,   0.60],
        'AKJXXXXX': [  1.40,   0.63],
        'AKJ9XXXX': [  1.41,   0.64],
        'AKJTXXXX': [  1.29,   0.66],
        'AKJT9XXX': [  1.31,   0.67],
        'AKQTXXXX': [  1.83,   0.88],
        'AKQXXXXX': [  1.82,   0.89],
        'AKQT9XXX': [  1.85,   0.89],
        'AKQ9XXXX': [  1.84,   0.90],
        'AKQJXXXX': [  1.92,   1.00],
        'AKQJ9XXX': [  1.93,   1.01],
        'AKQJTXXX': [  2.20,   1.08],
        'AKQJT9XX': [  2.22,   1.09],
        'J9XXXXXXX': [ -3.61,  -2.02],
        'JTXXXXXXX': [ -3.59,  -2.01],
        'JT9XXXXXX': [ -3.57,  -1.99],
        'T9XXXXXXX': [ -3.09,  -1.77],
        'Q9XXXXXXX': [ -2.77,  -1.39],
        'QTXXXXXXX': [ -2.74,  -1.37],
        'QT9XXXXXX': [ -2.73,  -1.36],
        'K9XXXXXXX': [ -3.12,  -1.22],
        'KTXXXXXXX': [ -3.10,  -1.21],
        'KT9XXXXXX': [ -3.09,  -1.20],
        'QJXXXXXXX': [ -2.83,  -1.19],
        'QJ9XXXXXX': [ -2.82,  -1.18],
        'QJTXXXXXX': [ -2.79,  -1.17],
        'QJT9XXXXX': [ -2.77,  -1.16],
        'KJXXXXXXX': [ -2.03,  -1.00],
        'KJ9XXXXXX': [ -2.01,  -0.99],
        'KJTXXXXXX': [ -1.99,  -0.97],
        'KJT9XXXXX': [ -1.97,  -0.96],
        'KQXXXXXXX': [ -2.06,  -0.82],
        'KQ9XXXXXX': [ -2.04,  -0.81],
        'KQTXXXXXX': [ -2.02,  -0.79],
        'KQT9XXXXX': [ -2.00,  -0.78],
        'A9XXXXXXX': [ -1.25,  -0.56],
        'ATXXXXXXX': [ -1.23,  -0.54],
        'AT9XXXXXX': [ -1.22,  -0.53],
        'KQJXXXXXX': [ -1.62,  -0.53],
        'KQJ9XXXXX': [ -1.61,  -0.52],
        'KQJTXXXXX': [ -1.58,  -0.50],
        'KQJT9XXXX': [ -1.57,  -0.49],
        'AJXXXXXXX': [ -0.50,  -0.31],
        'AJ9XXXXXX': [ -0.49,  -0.30],
        'AJTXXXXXX': [ -0.46,  -0.29],
        'AJT9XXXXX': [ -0.44,  -0.27],
        'AQXXXXXXX': [  0.18,  -0.11],
        'AQ9XXXXXX': [  0.19,  -0.11],
        'AQTXXXXXX': [  0.22,  -0.09],
        'AQT9XXXXX': [  0.23,  -0.08],
        'AQJXXXXXX': [  0.14,   0.01],
        'AQJ9XXXXX': [  0.16,   0.02],
        'AQJTXXXXX': [  0.19,   0.04],
        'AQJT9XXXX': [  0.20,   0.05],
        'AKXXXXXXX': [  0.96,   0.43],
        'AK9XXXXXX': [  0.98,   0.44],
        'AKTXXXXXX': [  1.00,   0.46],
        'AKT9XXXXX': [  1.01,   0.47],
        'AKJXXXXXX': [  1.12,   0.47],
        'AKJ9XXXXX': [  1.14,   0.48],
        'AKJTXXXXX': [  1.16,   0.50],
        'AKJT9XXXX': [  1.18,   0.51],
        'AKQXXXXXX': [  1.60,   0.62],
        'AKQ9XXXXX': [  1.61,   0.63],
        'AKQTXXXXX': [  1.64,   0.64],
        'AKQT9XXXX': [  1.65,   0.65],
        'AKQJXXXXX': [  1.44,   0.68],
        'AKQJ9XXXX': [  1.46,   0.69],
        'AKQJTXXXX': [  1.48,   0.71],
        'AKQJT9XXX': [  1.49,   0.72],
        'JT9XXXXXXX': [ -3.44,  -1.72],
        'QT9XXXXXXX': [ -2.91,  -1.57],
        'KT9XXXXXXX': [ -3.21,  -1.40],
        'QJ9XXXXXXX': [ -2.67,  -1.35],
        'QJTXXXXXXX': [ -2.65,  -1.33],
        'QJT9XXXXXX': [ -2.63,  -1.32],
        'KJ9XXXXXXX': [ -2.20,  -1.02],
        'KJTXXXXXXX':  [-2.18,  -1.01],
        'KJT9XXXXXX': [ -2.17,  -1.00],
        'KQ9XXXXXXX': [ -2.20,  -0.83],
        'KQTXXXXXXX': [ -2.18,  -0.81],
        'KQT9XXXXXX': [ -2.17,  -0.80],
        'KQJXXXXXXX': [ -2.18,  -0.75],
        'KQJ9XXXXXX': [ -2.17,  -0.74],
        'KQJTXXXXXX': [ -2.15,  -0.72],
        'KQJT9XXXXX': [ -2.13,  -0.71],
        'AT9XXXXXXX': [ -2.32,  -0.42],
        'AJ9XXXXXXX': [ -0.80,  -0.39],
        'AJTXXXXXXX': [ -0.78,  -0.37],
        'AJT9XXXXXX': [ -0.76,  -0.36],
        'AQJXXXXXXX': [  0.07,  -0.10],
        'AQJ9XXXXXX': [  0.09,  -0.09],
        'AQJTXXXXXX': [  0.11,  -0.07],
        'AQ9XXXXXXX': [  0.07,  -0.07],
        'AQJT9XXXXX': [  0.12,  -0.06],
        'AQTXXXXXXX': [  0.09,  -0.05],
        'AQT9XXXXXX': [  0.10,  -0.04],
        'AK9XXXXXXX': [  0.71,   0.21],
        'AKTXXXXXXX': [  0.73,   0.23],
        'AKT9XXXXXX': [  0.74,   0.23],
        'AKJXXXXXXX': [  0.81,   0.27],
        'AKJ9XXXXXX': [  0.82,   0.29],
        'AKJTXXXXXX': [  0.84,   0.30],
        'AKJT9XXXXX': [  0.86,   0.31],
        'AKQXXXXXXX': [  0.85,   0.35],
        'AKQ9XXXXXX': [  0.86,   0.36],
        'AKQTXXXXXX': [  0.88,   0.37],
        'AKQT9XXXXX': [  0.89,   0.38],
        'AKQJXXXXXX': [  1.00,   0.45],
        'AKQJ9XXXXX': [  1.01,   0.46],
        'AKQJTXXXXX': [  1.03,   0.47],
        'AKQJT9XXXX': [  1.05,   0.48],
        'QJT9XXXXXXX': [ -3.17,  -1.27],
        'KJT9XXXXXXX': [ -2.42,  -1.23],
        'KQT9XXXXXXX': [ -2.45,  -0.91],
        'KQJ9XXXXXXX': [ -2.40,  -0.88],
        'KQJTXXXXXXX': [ -2.38,  -0.86],
        'KQJT9XXXXXX': [ -2.37,  -0.86],
        'AJT9XXXXXXX': [ -0.20,  -0.23],
        'AQT9XXXXXXX': [ -0.16,  -0.22],
        'AQJ9XXXXXXX': [ -0.10,  -0.19],
        'AQJTXXXXXXX': [ -0.08,  -0.18],
        'AQJT9XXXXXX': [ -0.07,  -0.17],
        'AKT9XXXXXXX': [  0.35,   0.13],
        'AKJ9XXXXXXX': [  0.40,   0.15],
        'AKJTXXXXXXX': [  0.41,   0.17],
        'AKJT9XXXXXX': [  0.43,   0.17],
        'AKQ9XXXXXXX': [  0.49,   0.20],
        'AKQTXXXXXXX': [  0.50,   0.21],
        'AKQT9XXXXXX': [  0.51,   0.22],
        'AKQJXXXXXXX': [  0.56,   0.24],
        'AKQJ9XXXXXX': [  0.57,   0.25],
        'AKQJTXXXXXX': [  0.59,   0.26],
        'AKQJT9XXXXX': [  0.60,   0.27],
        'KQJT9XXXXXXX': [ -2.01,  -0.98],
        'AQJT9XXXXXXX': [ -0.25,  -0.07],
        'AKJT9XXXXXXX': [  0.17,   0.05],
        'AKQT9XXXXXXX': [  0.14,   0.06],
        'AKQJ9XXXXXXX': [  0.19,   0.09],
        'AKQJTXXXXXXX': [  0.21,   0.10],
        'AKQJT9XXXXXX': [  0.22,   0.10],
        'AKQJT9XXXXXXX': [  0.00,   0.00]
};

Bridge.Shape.prototype.binky = function() {
    return Binky.patterns[this.pattern];
};

Bridge.Shape.prototype.binkyNT = function() {
    return this.binky()[0]
};

Bridge.Shape.prototype.binkySuit = function() {
    return this.binky()[1]
};

Binky.Rank = new Bridge.Rank(7,'9');
Bridge.Holding.prototype.binky = function() {
    return Binky.holdings[this.spotX(Binky.Rank)];
};

Bridge.Holding.prototype.binkyNT = function() {
    return this.binky()[0];
}

Bridge.Holding.prototype.binkySuit = function() {
    return this.binky()[1];
}

