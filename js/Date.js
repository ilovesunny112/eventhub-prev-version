function showdate(n) {
	var uom = new Date(new Date() - 0 + n * 86400000);
	return uom;
}
function isvalid(dateStr, nDays) {
	while (dateStr.indexOf("-") >= 0)
	dateStr = dateStr.replace("-", "/");

	var date = new Date(Date.parse(dateStr));

	//�Ƚ��Ƿ����
	var bDate = showdate(nDays); //nDays ��ȥ30������ -30
	alert(bDate - 0);
	alert(date - 0);
	return (date - 0) < (bDate - 0);
}

