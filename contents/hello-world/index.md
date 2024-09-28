---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
thumbnail: "./images/salty_egg.jpg"
---

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)

You can also write code blocks here!

```js
const saltyDuckEgg = "chinese preserved food product"
```

| Number | Title                                    | Year |
| :----- | :--------------------------------------- | ---: |
| 1      | Harry Potter and the Philosopher’s Stone | 2001 |
| 2      | Harry Potter and the Chamber of Secrets  | 2002 |
| 3      | Harry Potter and the Prisoner of Azkaban | 2004 |

[View raw (TEST.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

This is a paragraph.

# Header 1

## Header 2

### Header 3

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.


> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:

```python
# Code blocks
def my_func(a: int) -> int:
    """Test func"""
    return a + 3

b: int = my_func(5)
```

```yaml{2,4-6}
apiVersion: v1
kind: Pod # 오브젝트 종류가 파드임을 나타냄
metadata: # 파드의 메타데이터
	name: my-nginx-pod # 파드 이름
spec: # 파드를 생성하기 위한 상세 정보를 명시
	containers:
		- name: my-nginx-container # 파드 내 컨테이너 이름
			image: nginx:latest # 컨테이너 이미지
			ports:
				- containerPort: 80 # 도커로 치면 EXPOSE 80 (아직 외부로 노출이 안된거임)
					protocol: TCP
```

```shell{promptUser: alice}{promptHost: dev.localhost}{outputLines:2-3}
cd kubectl apply -f pod.yaml
pod created
it's gone
```

```diff-python
+ print(3)
- print(5)
```

Additionally, access to ChatGPT is integrated into Siri and systemwide Writing Tools across Apple’s platforms, allowing users to access its expertise — as well as its image- and document-understanding capabilities — without needing to jump between tools.

### Additional features in iOS 18 include: 

even better:
- In **Apple Maps**, users can browse thousands of hikes across national parks in the United States and easily create their own custom walking routes, which they can access offline. Maps users can also save their favorite national park hikes, custom walking routes, and locations to an all-new Places Library and add personal notes about each spot.
    - Green
- Blue


- 컨테이너는 어떻게 돌림?
    - `Container Runtime Interface` (도커 말고도 종류가 다양함)
    - OCI 표준을 구현하기만 하면 됨

- `code goes` here in this line
- **bold** goes here

```markdown
- `code goes` here in this line
- **bold** goes here
```

1. Buy flour and salt
1. Mix together with water
1. Bake
1. ol
    - inside ul
        1. inside ol
1. ol

- ul
    1. inside ol
        - inside ul
    1. inside ol
- ul

---


This is [an example](http://example.com "Example") link.

[This link](http://example.com) has no title attr.

This is [an example][id] reference-style link.

[id]: http://example.com "Optional Title"

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

~~Strikethrough~~

This paragraph has some `code` in it.

![Alt Text](https://via.placeholder.com/200x50 "Image Title")
