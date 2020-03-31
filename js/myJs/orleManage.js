/*角色管理js */
$(function () { 
    $('#myTab a:first').tab('show');//初始化显示哪个tab 
    $('#myTab a').click(function (e) { 
        e.preventDefault();//阻止a链接的跳转行为 
        $(this).tab('show');//显示当前选中的链接及关联的content 
    })
    initTable();
}) 
function initTable(){
    $('#table').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/set.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 10,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams:null,
        columns: [
            {
                title: "灯具名称",
                field: 'name',
                align: 'center',
                width: 160,
                valign: 'middle'
            },
            {
                title: "灯具类型",
                field: 'type',
                align: 'center',
                width: 80,
                valign: 'middle'
            },
            {
                title: '控制器地址',
                field: 'url',
                align: 'center',
                width: 120,
                valign: 'middle'
            }
        ]
    });
}

