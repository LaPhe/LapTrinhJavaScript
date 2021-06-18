class SinhVien {

    constructor(name, mark, gender, subjects) {
        this.name = name;
        this.mark = mark;
        this.gender = gender;
        this.subjects = subjects;   
    }
    
    showInfo() {
        return "Name: " + this.name + ", Mark: " + this.mark;
    }

}

class Subjects{
    constructor(title, mark) {
        this.title = title;
        this.mark = mark;
    }
}
var sinhVien1 = new SinhVien("Nguyễn Văn A", 10,"Nam",[new Subjects("Toan",5),new Subjects("Ly",10)]);
var sinhVien2 = new SinhVien("Nguyễn Văn B", 9,"Nu",[new Subjects("Toan",9),new Subjects("Ly",10)]);
var sinhVien3 = new SinhVien("Nguyễn Văn C", 10,"Nam",[new Subjects("Toan",5),new Subjects("Ly",10)]);
var sinhVien4 = new SinhVien("Nguyễn Văn D", 9,"Nu",[new Subjects("Toan",9),new Subjects("Ly",10)]);
var sinhVien5 = new SinhVien("Nguyễn Văn E", 10,"Nam",[new Subjects("Toan",5),new Subjects("Ly",10)]);
var sinhVien6 = new SinhVien("Nguyễn Văn F", 9,"Nu",[new Subjects("Toan",9),new Subjects("Ly",10)]);
var sinhVien7 = new SinhVien("Nguyễn Văn H", 10,"Nam",[new Subjects("Toan",5),new Subjects("Ly",10)]);
var sinhVien8 = new SinhVien("Nguyễn Văn K", 9,"Nu",[new Subjects("Toan",9),new Subjects("Ly",10)]);
var sinhVien9 = new SinhVien("Nguyễn Văn L", 10,"Nam",[new Subjects("Toan",5),new Subjects("Ly",10)]);
var sinhVien10 = new SinhVien("Nguyễn Văn M", 9,"Nu",[new Subjects("Toan",9),new Subjects("Ly",10)]);

var studentArray = [sinhVien1 , sinhVien2];

studentArray.sort(function(a, b){
    return a.mark - b.mark;
});

studentArray.sort(function(a, b){
    return b.mark - a.mark;
});

function ascbymark(a,b){
    return a.mark - b.mark;
}
studentArray.sort(ascbymark);

function desbymark(a,b){
    return b.mark - a.mark;
}
studentArray.sort(desbymark);



