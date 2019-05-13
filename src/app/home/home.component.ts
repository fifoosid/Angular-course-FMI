import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = [{
    author: "awd",
    date: "2019-05-23",
    status: "seg",
    tags: "seag",
    text: "awd",
    title: "awd",
    url: "seg",
    id: 1,
  },{
    author: "aesf",
    date: "2019-05-23",
    status: "seasefg",
    tags: "seaasefsfg",
    text: "awdsaefsaf",
    title: "awsaefsefd",
    url: "sesaefsaefg",
    id: 2,
  }];
  id = 2;

  constructor(private router: Router){}

  ngOnInit(){}

  addNew(event) {
    this.posts.push({
      author: event.author,
      date: event.date,
      status: event.status,
      tags: event.tags,
      text: event.text,
      title: event.title,
      url: event.url,
      id: ++this.id,
    });
  }

  deleteItem(post) {
    this.posts = this.posts.filter(curr => curr !== post);
  }

  editItem(event) {
    console.log(event);
    // this.router.navigateByUrl(`/edit/${event.id}`, { state: { posts: this.posts}});
    // this.router.navigateByUrl('/edit/2', { state: { hello: 'world' } });
    this.router.navigateByUrl('/edit/2', { state: { orderId: 1234 } });
  }

}
