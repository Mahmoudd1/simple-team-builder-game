import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamApp';
  newMember:String="";
  errorMessage:String="";
  members:String []=[];
  numOfTeams:number|""="";
  teams:String[][]=[];
  setNumberOfTeams(value:String)
  {
    this.numOfTeams=Number(value);
  }

  addMember()
  {
    if (this.newMember=="")
    {
      this.errorMessage="Name can't be empty";
      return;
    }
    this.errorMessage="";
    this.members.push(this.newMember);
    console.log(this.members);
    this.newMember="";
  }
  updateNewMember(a:String)
  {
    this.newMember=a;
  
  }
  setTeams()
  {
    if (this.members.length<1||Number(this.numOfTeams)<1||Number(this.numOfTeams)>this.members.length)
    {
      this.errorMessage="Invalid Input";
      return ;
    }
    this.errorMessage="";
    this.teams=[];
    let totalMembers=[...this.members];
    const teamsize=Math.ceil(totalMembers.length/Number(this.numOfTeams));
    outerLoop:
    for (let i=0;i<Number(this.numOfTeams);i++)
    {
      for (let j=0;j<teamsize;j++)
      {
          let randomIndex=Math.floor(Math.random()*totalMembers.length);
          if (!this.teams[i])
          {
            this.teams[i]=[];
          }
          this.teams[i].push(totalMembers[randomIndex]);
          totalMembers.splice(randomIndex,1);
          if (totalMembers.length==0)
            break outerLoop;
          
      }
    }
    console.log("Team Size :",teamsize)
    console.log(this.teams,totalMembers);
    this.members=[];

  }
}
