var names_of_people = [];
function submit(){
    var guest_name = document.getElementById("name1").value;
    names_of_people.push(guest_name);
    var length_of_name = names_of_people.length;
    document.getElementById("diplay_name").innerHTML = names_of_people.toString();
}
function sorting(){
    names_of_people.sort();
    document.getElementById("sorted").innerHTML = names_of_people;
}
function show(){
    document.getElementById("p1").innerHTML = names_of_people;
    document.getElementById("sort_button").style.display = "block";
}