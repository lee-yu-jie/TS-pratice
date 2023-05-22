// ----- class -----
// private 
// 撰寫程式時無法被讀取或寫入

// public

// protected
// 只有在繼承時才能被讀取

class Live {
  roomName: string;
  private id: string;
  protected name: string;

  constructor (roomName1: string, id1: string, name1: string) {
    this.roomName = roomName1;
    this.id = id1;
    this.name = name1;
  }
}

class carLive extends Live {
  constructor(roomName1: string, id1: string, name1: string){
    super(roomName1, id1, name1);
  }


  start(){
    console.log(super.name);
  }
}

const live = new Live('1號房間', '22', 'Mike')
// live.private //無法訪問到


// ---- implements -----
interface Alarm {
  alert():void;
}
class Car implements Alarm {
  alert() {
      console.log('Car alert');
  }
}
// 創建利用Car類別作為原型的新物件
const car: Car = new Car();
car.alert();