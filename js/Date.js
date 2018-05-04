function showdate(n) {
	var uom = new Date(new Date() - 0 + n * 86400000);
	return uom;
}
function isvalid(dateStr, nDays) {
	while (dateStr.indexOf("-") >= 0)
	dateStr = dateStr.replace("-", "/");

	var date = new Date(Date.parse(dateStr));

	//比较是否过期
	var bDate = showdate(nDays); //nDays 过去30天以内 -30
	alert(bDate - 0);
	alert(date - 0);
	return (date - 0) < (bDate - 0);
}

