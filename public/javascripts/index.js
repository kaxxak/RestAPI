document.getElementById("get_user").addEventListener('click',function () {
    $.get("/users/get_users?id="+$("#user_id").val(),{},function (data) {
        showDataUser(data);

    });
});
document.getElementById("get_users").addEventListener('click',function () {
    $.get("/users/get_users",{},function (data) {
        showDataUsers(data);
    });
});
document.getElementById("add_user").addEventListener('click',function () {
    $.post("/users/add_user",{
        name        : $("#name").val(),
        surname     : $("#surname").val(),
        birthday    : $("#birthday").val(),
        address_1   : $("#address_1").val(),
        address_2   : $("#address_2").val(),
        country     : $("#country").val(),
        city        : $("#city").val(),
        postal_code : $("#postal_code").val(),
    },function (data) {
        showNotifications("User Added")
    });
});

document.getElementById("delete_user").addEventListener('click',function () {
    let body = {
        id : $("#delete_id").val(),
    };
    $.ajax({
        url: "/users/delete_user",
        type: 'delete',
        data: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
        success : function (data) {
            showNotifications("User removed")
        }
    });
});

document.getElementById("update_user").addEventListener('click',function () {
    let body = {
        field : $('#update_field').val(),
        value : $('#update_value').val(),
        id    : $('#update_id').val(),
    };
    $.ajax({
        url: "/users/update_user",
        type: 'put',
        data: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
        success : function (data) {
            showNotifications("User Updated");
        }
    });
});

function showDataUser(result) {
    if (!$('#users_div').is(':empty')){
        $('#users_div').html('');

    }
    result = "<hr><table><tr><th>Name</th><td>"+result.message.name+"</td></tr>"+
        "<tr><th>Surname</th><td>"+result.message.surname+"</td></tr>"+
        "<tr><th>Birthdate</th><td>"+result.message.birthday+"</td></tr>"+
        "<tr><th>Address 1</th><td>"+result.message.address_1+"</td></tr>"+
        "<tr><th>Address 2</th><td>"+result.message.address_2+"</td></tr>"+
        "<tr><th>Country</th><td>"+result.message.country+"</td></tr>"+
        "<tr><th>City</th><td>"+result.message.city+"</td></tr>"+
        "<tr><th>Postal Code</th><td>"+result.message.postal_code+"</td></tr></table><hr>";
    var result = $('#users_div').append(result);
    return result;
}
function showDataUsers(result) {
    var output = "";
    if (!$('#users_div').is(':empty')){
        $('#users_div').html('');

    }
    var length = Object.keys(result.message).length;
    for (var i = 0;i < length;i++) {
        output += "<hr><table><tr><th>ID </th><td>" + result.message[i]._id + "</td></tr>" +
            "<tr><th>Name</th><td>" + result.message[i].name + "</td></tr>" +
            "<tr><th>Surname</th><td>" + result.message[i].surname + "</td></tr>" +
            "<tr><th>Birthdate</th><td>" + result.message[i].birthday + "</td></tr>" +
            "<tr><th>Address 1</th><td>" + result.message[i].address_1 + "</td></tr>" +
            "<tr><th>Address 2</th><td>" + result.message[i].address_2 + "</td></tr>" +
            "<tr><th>Country</th><td>" + result.message[i].country + "</td></tr>" +
            "<tr><th>City</th><td>" + result.message[i].city + "</td></tr>" +
            "<tr><th>Postal Code</th><td>" + result.message[i].postal_code + "</td></tr></table><hr>";
    }
    var result = $('#users_div').append(output);
    return result;
}

function showNotifications(text) {
    alert(text);
}