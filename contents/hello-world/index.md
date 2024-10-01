---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
categories: Test Category
thumbnail: "./salty_egg.jpg"
---

# Heading 1
## Heading 2
### Heading 3

A salted duck egg is a Chinese preserved food product made by soaking duck
eggs in brine, or packing each egg in damp, salted charcoal. In Asian
supermarkets, these eggs are sometimes sold covered in a thick layer of salted
charcoal paste. The eggs may also be sold with the salted paste removed,
wrapped in plastic, and vacuum packed. From the salt curing process, the
salted duck eggs have a briny aroma, a gelatin-like egg white and a
firm-textured, round yolk that is bright orange-red in color.

Unordered List
- Item 1
- Item 2
- Item 3

Ordered List
1. Step 1
1. Step 2
1. Step 3

Nested List
- Unordered
    - Nested
        - List
- Items

Blockquotes

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:

Tables

| Number | Title                                    | Year |
| :----- | :--------------------------------------- | ---: |
| 1      | Harry Potter and the Philosopher’s Stone | 2001 |
| 2      | Harry Potter and the Chamber of Secrets  | 2002 |
| 3      | Harry Potter and the Prisoner of Azkaban | 2004 |

Anchors

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

Images 

![Chinese Salty Egg](./salty_egg.jpg)
![Alt Text](https://via.placeholder.com/200x50 "Image Title")

Inline codes

A simple `inline code` sentence

### `Code` in heading

Code blocks

```js
const saltyDuckEgg = "chinese preserved food product"
```

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