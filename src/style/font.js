import Metrics from './metrics'

const size = {
    font6 : Metrics.screenWidth * (6 / 365),
    font8 : Metrics.screenWidth * (8 / 365),
    font10 : Metrics.screenWidth * (10 / 365),
    font12 : Metrics.screenWidth * (12 / 365),
    font14 : Metrics.screenWidth * (14 / 365),
    font16 : Metrics.screenWidth * (16 / 365),
    font15 : Metrics.screenWidth * (15 / 365),
    font18 : Metrics.screenWidth * (18 / 365),
    font20 : Metrics.screenWidth * (20 / 365),
    font22 : Metrics.screenWidth * (22 / 365),
    font24 : Metrics.screenWidth * (24 / 365),
    font26 : Metrics.screenWidth * (26 / 365),
    font27 : Metrics.screenWidth * (27 / 365),
    font28 : Metrics.screenWidth * (28 / 365),
    font29 : Metrics.screenWidth * (29 / 365),
    font30 : Metrics.screenWidth * (30 / 365),
    font31 : Metrics.screenWidth * (31 / 365),
    font32 : Metrics.screenWidth * (32 / 365),
};

const weight = {
    full: '900',
    semi: '600',
    low: '400',
    bold: 'bold',
    normal: 'normal',
};

const type = {
    poppinsRegular: 'Poppins-Regular',
    poppinsMedium: 'Poppins-Medium',
    poppinsSemiBold: 'Poppins-SemiBold',
    poppinsBold: 'Poppins-Bold',
    poppinsBlack: 'Poppins-Black',
    
    robotoRegular: 'Roboto-Regular',
    robotoMedium: 'Roboto-Medium',
    robotoSemiBold: 'Roboto-SemiBold',
    robotoBold: 'Roboto-Bold',
    robotoBlack: 'Roboto-Black',
};

export default {
    size,
    weight,
    type
}