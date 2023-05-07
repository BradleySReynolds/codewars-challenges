var addTwoNumbers = function (l1, l2) {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const head = new Node(l1[0]);
  head.next = new Node(l1[1]);
  head.next.next = new Node(l1[2]);

  console.log(head);
};

addTwoNumbers([1, 2, 3], [4, 5, 6]);
