const isMobile = {
	Android: function () {
		const isAndroid = typeof window !== 'undefined' ? navigator.userAgent.match(/Android/i): false
		return isAndroid
	},
	BlackBerry: function () {
		const isBlackBerry =  typeof window !== 'undefined' ?   navigator.userAgent.match(/BlackBerry/i):false;
		return isBlackBerry
	},
	iOS: function () {
		const isIOS =  typeof window !== 'undefined' ?  navigator.userAgent.match(/iPhone|iPad|iPod/i):false;
		return isIOS
	},
	Opera: function () {
		const isOpera  = typeof window !== 'undefined' ? navigator.userAgent.match(/Opera Mini/i):false;
		return isOpera
	},
	Windows: function () {
		const isWindows = typeof window !== 'undefined' ? navigator.userAgent.match(/IEMobile/i) :false;
		return isWindows
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

export const isDesktop = !isMobile.any();

if (!isDesktop) document.documentElement.classList.add("touch");