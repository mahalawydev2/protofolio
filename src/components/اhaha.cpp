#include <iostream>
using namespace std;
struct Node {
    int id;
    Node* left;
    Node* right;
};

class BinaryTree {
private:
    Node* root;
    
    Node* createNode(int value) {
        Node* newNode = new Node;
        newNode->id = value;
        newNode->left = nullptr;
        newNode->right = nullptr;
        return newNode;
    }
    
    Node* insertnode(Node* node, int value) {
        if (node == nullptr)
            return createNode(value);
        
        if (value < node->id)
            node->left = insertnode(node->left, value);
        else
            node->right = insertnode(node->right, value);
        
        return node;
    }
    
    Node* searchn(Node* node, int value) {
        if (node == nullptr || node->id == value)
            return node;
        
        if (value < node->id)
            return searchn(node->left, value);
        else
            return searchn(node->right, value);
    }
    Node* findMin(Node* node) {
        Node* temp = node;
        while (temp->left != nullptr)
            temp = temp->left;
        return temp;
    }
    
 Node* deleteHelper(Node* node, int value) {
        if (node == nullptr)
            return nullptr;
        
        if (value < node->id)
            node->left = deleteHelper(node->left, value);
        else if (value > node->id)
            node->right = deleteHelper(node->right, value);
        else {
            // Case 1: No child
            if (node->left == nullptr && node->right == nullptr) {
                delete node;
                return nullptr;
            }
            // Case 2: One child
            else if (node->left == nullptr) {
                Node* temp = node->right;
                delete node;
                return temp;
            }
            else if (node->right == nullptr) {
                Node* temp = node->left;
                delete node;
                return temp;
            }
            // Case 3: Two children
            else {
                Node* temp = findMin(node->right);
                node->id = temp->id;
                node->right = deleteHelper(node->right, temp->id);
            }
        }
        return node;
    }
    
    void preorderr(Node* node) {
        if (node == nullptr)
            return;
        cout << node->id << " ";
        preorderr(node->left);
        preorderr(node->right);
    }
    
    void inorderr(Node* node) {
        if (node == nullptr)
            return;
        inorderr(node->left);
        cout << node->id << " ";
        inorderr(node->right);
    }
    
    void postorderr(Node* node) {
        if (node == nullptr)
            return;
        postorderr(node->left);
        postorderr(node->right);
        cout << node->id << " ";
    }
    
public:
    BinaryTree() {
        root = nullptr;
    }
    
    void insert(int value) {
        root = insertnode(root, value);
        cout << "Inserted: " << value << endl;
    }
    bool search(int value) {
        Node* result = searchn(root, value);
        return result != nullptr;
    }
    void remove(int value) {
        if (search(value)) {
            root = deleteHelper(root, value);
            cout << "Deleted: " << value << endl;
        } else {
            cout << "Value " << value << " not found!" << endl;
        }
    }
    void preorder() {
        cout << "Preorder:  ";
        preorderr(root);
        cout << endl;
    }
    void inorder() {
        cout << "Inorder:   ";
        inorderr(root);
        cout << endl;
    }
    void postorder() {
        cout << "Postorder: ";
        postorderr(root);
        cout << endl;
    }
    bool isEmpty() {
        return root == nullptr;
    }
};