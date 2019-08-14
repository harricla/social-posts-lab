import { Component, OnInit } from '@angular/core';
import { Post } from "../interfaces/post";

@Component({
    selector: 'social-posts',
    templateUrl: './social-posts.component.html',
    styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
    show: boolean = false;

    posts: Post[] = [
        {
            title: "Grand Circus",
            thought: "Grand Circus is cool."
        }, {
            title: "Ritual",
            thought: "Ritual is a well developed app."
        }
    ];
    constructor() { }

    ngOnInit() {
    }

    addPost() {

    }
    deletePost(index: number): void {
        this.posts.splice(index, 1);
    }
}
