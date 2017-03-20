module.exports = function (child) {
	"use strict";
	return new Promise(function (resolve, reject) {
		child.addListener("error", reject);
		child.addListener("exit", resolve);
	})
};
