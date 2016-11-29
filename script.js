(function ($) {

    var dayHeals = [{"name":"Ecnivuss", "server":"Sen'Jin"},
                    {"name":"Krynoob", "server":"Sen'Jin"},
                    {"name":"Showenuf", "server":"Sen'Jin"},];

    var dayTanks = [{"name":"Almerin", "server":"Quel'dorei"},
                    {"name":"Coltraine", "server":"Sen'Jin"},
                    {"name":"Sylithria", "server":"Quel'dorei"},];

    var dayDPS = [{"name":"Casja", "server":"Sen'Jin"},
                    {"name":"Chowderspoon", "server":"Quel'dorei"},
                    {"name":"Galmar", "server":"Quel'dorei"},
                    {"name":"Iaime", "server":"Sen'Jin"},
                    {"name":"Rusion", "server":"Sen'Jin"},
                    {"name":"Sekken", "server":"Quel'dorei"},
                    {"name":"Shyläh", "server":"Sen'Jin"},
                    {"name":"Thárros", "server":"Sen'Jin"},
                    {"name":"Whiteppl", "server":"Quel'dorei"},];

    var $homePage = null;
    var $dayPage = null;
    var $nightPage = null;
    var $recruitPage = null;

    var $homeTab = null;
    var $dayTab = null;
    var $nightTab = null;
    var $recruitTab = null;

    var $dayTankTable = null;
    var $dayHealTable = null;
    var $dayDPSTable = null;

    var goToHome = function(){
        $homePage.show();
        $dayPage.hide();
        $nightPage.hide();
        $recruitPage.hide();

        $homeTab.parent().addClass("active");
        $dayTab.parent().removeClass("active");
        $nightTab.parent().removeClass("active");
        $recruitTab.parent().removeClass("active");
    };

    var goToDay = function(){
        $homePage.hide();
        $dayPage.show();
        $nightPage.hide();
        $recruitPage.hide();

        $homeTab.parent().removeClass("active");
        $dayTab.parent().addClass("active");
        $nightTab.parent().removeClass("active");
        $recruitTab.parent().removeClass("active");
    };

    var goToNight = function(){
        $homePage.hide();
        $dayPage.hide();
        $nightPage.show();
        $recruitPage.hide();

        $homeTab.parent().removeClass("active");
        $dayTab.parent().removeClass("active");
        $nightTab.parent().addClass("active");
        $recruitTab.parent().removeClass("active");
    };

    var goToRecruit = function(){
        $homePage.hide();
        $dayPage.hide();
        $nightPage.hide();
        $recruitPage.show();

        $homeTab.parent().removeClass("active");
        $dayTab.parent().removeClass("active");
        $nightTab.parent().removeClass("active");
        $recruitTab.parent().addClass("active");
    };


    var loadDayTanks = function(){
        var tableLength = dayTanks.length;
        for(var i = 0; i< tableLength; i++){
            $dayTankTable.append("<tr id='dayRowTank"+i+"'></tr>");
            var $row = $("#dayRowTank"+i);
            $.ajax({
                url:"https://us.api.battle.net/wow/character/"+dayTanks[i].server+"/"+dayTanks[i].name,
                data:{"locale":"en_US", "apikey":"seegnhzdsayxgag54ue4neg484n2eggj", "fields": "items,talents"},
                async:false
            })
            .done(function(results){
                console.log(results);
                $row.append("<td><img src='http://render-api-us.worldofwarcraft.com/static-render/us/"+results.thumbnail+"' id='playerIMG'></img><p id='playerName'>"+results.name+"</p></td>");
                $row.append("<td><img src='iconpng/"+results.class+".png'></img></td>");
                $row.append("<td><p>"+results.talents[0].spec.name+"</p></td>");
                $row.append("<td><p>"+results.items.averageItemLevelEquipped+"</p></td>");
            });
        }
    };

    var loadDayHeals = function(){
        var tableLength = dayHeals.length;
        for(var i = 0; i< tableLength; i++){
            $dayHealTable.append("<tr id='dayRowHeal"+i+"'></tr>");
            var $row = $("#dayRowHeal"+i);
            $.ajax({
                url:"https://us.api.battle.net/wow/character/"+dayHeals[i].server+"/"+dayHeals[i].name,
                data:{"locale":"en_US", "apikey":"seegnhzdsayxgag54ue4neg484n2eggj", "fields": "items,talents"},
                async:false
            })
            .done(function(results){
                console.log(results);
                $row.append("<td><img src='http://render-api-us.worldofwarcraft.com/static-render/us/"+results.thumbnail+"' id='playerIMG'></img><p id='playerName'>"+results.name+"</p></td>");
                $row.append("<td><img src='iconpng/"+results.class+".png'></img></td>");
                $row.append("<td><p>"+results.talents[0].spec.name+"</p></td>");
                $row.append("<td><p>"+results.items.averageItemLevelEquipped+"</p></td>");
            });
        }
    };

    var loadDayDPS = function(){
        var tableLength = dayDPS.length;
        for(var i = 0; i< tableLength; i++){
            $dayDPSTable.append("<tr id='dayRowDPS"+i+"'></tr>");
            var $row = $("#dayRowDPS"+i);
            $.ajax({
                url:"https://us.api.battle.net/wow/character/"+dayDPS[i].server+"/"+dayDPS[i].name,
                data:{"locale":"en_US", "apikey":"seegnhzdsayxgag54ue4neg484n2eggj", "fields": "items,talents"},
                async:false
            })
            .done(function(results){
                console.log(results);
                $row.append("<td><img src='http://render-api-us.worldofwarcraft.com/static-render/us/"+results.thumbnail+"' id='playerIMG'></img><p id='playerName'>"+results.name+"</p></td>");
                $row.append("<td><img src='iconpng/"+results.class+".png'></img></td>");
                $row.append("<td><p>"+results.talents[0].spec.name+"</p></td>");
                $row.append("<td><p>"+results.items.averageItemLevelEquipped+"</p></td>");
            });
        }
    };


    $( document ).ready(function() {
        $homePage = $("#homePage");
        $dayPage = $("#dayPage");
        $nightPage = $("#nightPage");
        $recruitPage = $("#recruitPage");

        $homeTab = $("#homeTab");
        $dayTab = $("#dayTab");
        $nightTab = $("#nightTab");
        $recruitTab = $("#recruitTab");

        $dayTankTable = $("#dayTankTable");
        $dayHealTable = $("#dayHealTable");
        $dayDPSTable = $("#dayDPSTable");

        goToHome();

        $homeTab.on("click", goToHome);
        $dayTab.on("click", goToDay);
        $nightTab.on("click", goToNight);
        $recruitTab.on("click", goToRecruit);


        loadDayTanks();
        loadDayHeals();
        loadDayDPS();
    });
}(jQuery));
