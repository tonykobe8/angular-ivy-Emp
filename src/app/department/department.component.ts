import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }
HR_Employees = 
    [{FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://us.123rf.com/450wm/sam74100/sam741001503/sam74100150300105/38081251-portrait-of-a-young-african-american-business-woman-black-people.jpg?ver=6" }]
  IT_Employees = [
    {FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://www.talk-business.co.uk/wp-content/uploads/2019/02/shutterstock_563534299.jpg"}, 
    {FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://jobstars.com/wp-content/uploads/2018/08/girl-1868930_1280.jpg" },
    {FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://blackeoejournal.com/wp-content/uploads/2019/12/confident-black-woman.jpg"}]
    Marketing_Employees = [
    {FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://images.assetsdelivery.com/compings_v2/michaeljung/michaeljung1302/michaeljung130200277.jpg" },
    {FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://us.123rf.com/450wm/francesco83/francesco831502/francesco83150200037/36350352-photo-of-african-smiling-businessman-standing-next-to-the-glass-wall.jpg?ver=6"},
    {FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://www.lsmensclothing.com/wp-content/uploads/2018/10/what-color-suit-to-buy.jpeg" }]
    Accounting_Employees =[
    {FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://cdn.cbtnews.com/wp-content/uploads/2017/04/shutterstock_403315558.jpg"}, 
    {FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://image.shutterstock.com/image-photo/african-american-customer-support-operator-260nw-1698411634.jpg" },
    {FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://secureservercdn.net/192.169.221.188/ca0.384.myftpupload.com/wp-content/uploads/2015/02/5-startegies-for-finding-a-dream-job.jpg"}]; 
    
  ngOnInit() {
  }

}